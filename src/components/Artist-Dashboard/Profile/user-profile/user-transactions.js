import React, { useState, useEffect } from 'react';
import { Modal, Table, Row } from 'antd';
import moment from 'moment';

import CircularLoader from '../../../Common/skeletons/circularLoader';


const UserTransactions = (props) => {

  const {
    totalAnalyticsCount,
    loadingAnalyticsCount,
    fetchAnalyticsCounts,
  } = props;


  const [isTransactionModalVisible, setIsTransactionModalVisible] = useState(false);

  useEffect(() => {
    // console.log("totalAnalyticsCount", totalAnalyticsCount);

    if (!Object.keys(totalAnalyticsCount).length) {
      // console.log("totalAnalyticsCount", totalAnalyticsCount);
      fetchAnalyticsCounts();
    }
  }, [])// eslint-disable-line

  const openViewTransactionsModal = () => {
    // console.log("openViewTransactionsModal");
    setIsTransactionModalVisible(!isTransactionModalVisible);
  }

  const handleModalCancel = () => {
    setIsTransactionModalVisible(false);
  }

  const columns = [

    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 1,
      render: (text,) => {

        return (
          <span>
            {

              `Rs ${text}`
            }
          </span>

        )
      }
    },
    {
      title: 'Transferred date',
      dataIndex: 'transferred_at',
      key: 2,
      render: (text,) => {

        return (
          <span>
            {
              moment(text).format("MMM D, YYYY")
            }
          </span>
        )
      }
    },
    {
      title: 'Remarks',
      dataIndex: 'remarks',
      key: 3,
      render: (text) => {

        return (
          <span>
            {
              text?text:''
            }
          </span>
        )
      }
    },

  ];

  return (
    <>
      {
        loadingAnalyticsCount ?
          (
            <Row className="justify-content-center">
              <CircularLoader size={'35px'} />
            </Row>
          )
          : (

            <>
              <div className="transferable-card--tab-card">
                <h4 className="text-20-black-medium">
                  Transferable Amount:
                  <span className="text-20-primary-medium">
                    &nbsp; Rs {totalAnalyticsCount?.transferableamount}
                  </span>

                </h4>
                {/* <p className="text-13-grey">will be transfered on 3/06/2021</p> */}
                <p className="transferable-card__viewTransactions" onClick={openViewTransactionsModal}>View all transactions</p>
              </div>

              <Modal
                title="Transactions history"
                visible={isTransactionModalVisible}
                // onOk={handleOk}
                onCancel={handleModalCancel}
                footer={null}
                width={800}
              >
                {
                  totalAnalyticsCount && totalAnalyticsCount?.balance?.transaction_logs ? (
                    <Table
                      dataSource={totalAnalyticsCount && totalAnalyticsCount?.balance?.transaction_logs ? totalAnalyticsCount?.balance?.transaction_logs : null}
                      columns={columns}
                      pagination={
                        {
                          pageSize: 10,
                        }
                      } />)
                    :
                    (
                      <p className="text-15-lightGrey text-center p-3">
                        Sorry no transactions history found.
                      </p>
                    )
                }
              </Modal>
            </>
          )
      }
    </>

  )
}

export default UserTransactions;
