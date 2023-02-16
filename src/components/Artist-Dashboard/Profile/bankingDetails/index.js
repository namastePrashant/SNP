import React, { useEffect, useState } from 'react'
import { Form, Input, Row, Radio ,Select} from 'antd'
import SpinButton from '../../../Common/SpinButton'
import { useSelector } from 'react-redux'
import CircularLoader from '../../../Common/skeletons/circularLoader'
import { firstCap, SetFormData } from '../../../../utils/commonUtils'
import {BankLists} from '../../../../constants/staticDatas'

const {Option} =Select;

const BankingDetail = props => {

  const {
    fetchBankingDetails,
    updateBankingDetails,
  } = props

  const [activeAccount, setActiveState] = useState(null)


  const onChange = e => {
    setActiveState(e.target.value);
  };



  useEffect(() => {
    fetchBankingDetails()
  }, [])  //eslint-disable-line



  /**
   * Redux states
   * 
   */
  const bankDetail = useSelector(state => state.artistBank.bankDetails)
  const loadingBankdetails = useSelector(state => state.artistBank.loading)
  const updating = useSelector(state => state.artistBank.updating)

  useEffect(() => {
    if (bankDetail?.primary?.status) {
      setActiveState(1)
    } else if (bankDetail?.secondary?.status) {
      setActiveState(2)
    }

    if(bankDetail){
      setPPM(bankDetail?.primary?.payment_service||null);
      setSPM(bankDetail?.secondary?.payment_service||null)
    }
  }, [bankDetail])//eslint-disable-line

  /**
   * end redux states
   */

  const onFormSubmit = (values) => {
    console.log(values)
    const formData = SetFormData({

      'artist[primary_account_holder]': values.primary_account_holder?values.primary_account_holder:"",
      'artist[primary_account_number]': values.primary_account_number?values.primary_account_number:"",
      'artist[primary_payment_service]': values.primary_payment_service?values.primary_payment_service:"",
      'artist[primary_bank_name]': values.primary_bank_name?values.primary_bank_name:"",
      'artist[primary_bank_status]': activeAccount === 1 ? 1 : 0,
      'artist[secondary_account_holder]': values.secondary_account_holder?values.secondary_account_holder:"",
      'artist[secondary_account_number]': values.secondary_account_number?values.secondary_account_number:"",
      'artist[secondary_payment_service]': values.secondary_payment_service?values.secondary_payment_service:"",
      'artist[secondary_bank_name]': values.secondary_bank_name?values.secondary_bank_name:"",
      'artist[secondary_bank_status]': activeAccount === 2 ? 1 : 0,
    })

    updateBankingDetails(formData)
  }



  // payment method field filter
  const [primaryPaymentMethod,setPPM] = useState(null)
  const [secondaryPaymentMethod,setSPM] = useState(null)

  const onPaymentMethodChange = (value,from) =>{
    if(from==="primary") {setPPM(value)}
    else{setSPM(value)}
  }


  const getSelectOptions = (List, errorMessage = "Sorry no data found") => {
    if (List.length) {
      return (
        <>
          {List.map(item => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </>
      )

    } else {
      return (
        <Option disabled>
          {errorMessage}
        </Option>
      )
    }
  }

  return (
    <section className="section-break-2">
      <div className='col-md-10'>
        {!loadingBankdetails && bankDetail ?

          <Form name="profile"
            initialValues={{ remember: true }}
            layout="vertical"
            onFinish={onFormSubmit}
            className="custom-form ">

            <section className="section-break-1">

              <div className={activeAccount === 1 ? "form-block--white-bg" : "form-block"}>
                <div className="col-md-12">
                  <h4 className='text-20-black-medium'>Primary Account Details
              <span className='float-right'>
                      <Radio.Group onChange={onChange} value={activeAccount}>
                        <Radio value={1}></Radio>
                      </Radio.Group>
                    </span>
                  </h4>
                </div>
                <Row gutter={[16, 16]} className='section-break-1 m-0'>

                  <div className="col-md-6">
                    <Form.Item 
                     label="Payment Service"
                     name="primary_payment_service"
                      initialValue={bankDetail && (bankDetail?.primary?.payment_service && (bankDetail?.primary?.payment_service !== "undefined" && bankDetail?.primary?.payment_service !== "null")) ? bankDetail?.primary?.payment_service : null}
                      >
                      <Select onChange={(value)=>onPaymentMethodChange(value,"primary")}>
                        <Option key="1" value="bank">Bank</Option>
                        <Option key="2" value="cash">Cash</Option>
                        <Option key="3" value="esewa">Esewa</Option>
                        <Option key="4" value="khalti">Khalti</Option>
                      </Select>
                    </Form.Item>
                  </div>  {/**Account holder's name field */}


                  <div className="col-md-6">
                    <Form.Item
                      label={`${primaryPaymentMethod === "cash"?"Name":
                         primaryPaymentMethod === 'esewa' || primaryPaymentMethod === 'khalti'?
                         firstCap(primaryPaymentMethod)+ " name"
                         :"Account Holder's name"
                        }`}
                      name="primary_account_holder"
                      rules={
                        activeAccount === 1 ?
                          [
                            { required: true, message: "Please enter account holder's name" },
                          ] : []}
                      initialValue={bankDetail && (bankDetail?.primary?.account_holder && (bankDetail?.primary?.account_holder !== "undefined" && bankDetail?.primary?.account_holder !== "null")) ? bankDetail?.primary?.account_holder : null}
                    >
                      <Input />
                    </Form.Item>
                  </div>  {/**Account holder's name field */}

                  {primaryPaymentMethod !=="cash"?
                     <div className="col-md-6">
                      <Form.Item
                        label={`${ primaryPaymentMethod === 'esewa' || primaryPaymentMethod === 'khalti'?
                        firstCap(primaryPaymentMethod)+ " mobile number"
                        :"Account number"
                      }`}
                        name="primary_account_number"
                        rules={
                          activeAccount === 1 ?
                            [
                              { required: true, message: "Please enter an account number" },
                            ] : []
                        }
                        initialValue={bankDetail && (bankDetail?.primary?.account_number && (bankDetail?.primary?.account_number !== "undefined" && bankDetail?.primary?.account_number !== "null")) ? bankDetail?.primary?.account_number : null}
                      >
                        <Input />
                      </Form.Item>
                    </div>:""  /**Account number field */
                  }
                 

                 {primaryPaymentMethod==="bank"?
                  <div className="col-md-6">
                    <Form.Item
                      label="Bank Name"
                      name="primary_bank_name"
                      rules={
                        activeAccount === 1 ?
                          [
                            { required: true, message: "Please enter the bank name" },
                          ] : []}
                      initialValue={bankDetail && (bankDetail?.primary?.bank_name && (bankDetail?.primary?.bank_name !== "undefined" && bankDetail?.primary?.bank_name !== "null")) ? bankDetail?.primary?.bank_name : null}
                    >
                      <Select
                        showSearch
                        placeholder="Select Bank"
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        style={{fontSize:'14px'}}
                        size={'large'}
                      >
                      {
                        getSelectOptions(BankLists, "Sorry no country Found")
                      }

                    </Select>
                    </Form.Item>
                    </div>:""  /**bank name field */
                  }

                </Row>
              </div>
            </section>

            <section className="section-break-1">
              <div className={activeAccount === 2 ? "form-block--white-bg" : "form-block"}>
                <div className="col-md-12">
                  <h4 className='text-20-black-medium'>Secondary Account Details
                <span className='float-right'>
                      <Radio.Group onChange={onChange} value={activeAccount}>
                        <Radio value={2}></Radio>
                      </Radio.Group>
                    </span>
                  </h4>
                </div>
                <Row gutter={[16, 16]} className='section-break-1 m-0'>


                <div className="col-md-6">
                    <Form.Item 
                     label="Payment Service"
                     name="secondary_payment_service"
                      initialValue={bankDetail && (bankDetail?.secondary?.payment_service && (bankDetail?.secondary?.payment_service !== "undefined" && bankDetail?.secondary?.payment_service !== "null")) ? bankDetail?.secondary?.payment_service : null}
                      >
                      <Select onChange={(value)=>onPaymentMethodChange(value,"secondary")}>
                        <Option key="1" value="bank">Bank</Option>
                        <Option key="2" value="cash">Cash</Option>
                        <Option key="3" value="esewa">Esewa</Option>
                        <Option key="4" value="khalti">Khalti</Option>
                      </Select>
                    </Form.Item>
                  </div>  {/**Account holder's name field */}


                  <div className="col-md-6">
                    <Form.Item
                      label={`${secondaryPaymentMethod === "cash"?"Name":
                      secondaryPaymentMethod === 'esewa' || secondaryPaymentMethod === 'khalti'?
                         firstCap(secondaryPaymentMethod)+ " account name"
                         :"Account Holder's name"
                        }`}
                      name="secondary_account_holder"
                      rules={
                        activeAccount === 1 ?
                          [
                            { required: true, message: "Please enter account holder's name" },
                          ] : []}
                      initialValue={bankDetail && (bankDetail?.secondary?.account_holder && (bankDetail?.secondary?.account_holder !== "undefined" && bankDetail?.secondary?.account_holder !== "null")) ? bankDetail?.secondary?.account_holder : null}
                    >
                      <Input />
                    </Form.Item>
                  </div>  {/**Account holder's name field */}

                  {secondaryPaymentMethod !=="cash"?
                     <div className="col-md-6">
                      <Form.Item
                        label={`${ secondaryPaymentMethod === 'esewa' || secondaryPaymentMethod === 'khalti'?
                        firstCap(secondaryPaymentMethod)+ " mobile number"
                        :"Account number"
                      }`}
                        name="secondary_account_number"
                        rules={
                          activeAccount === 1 ?
                            [
                              { required: true, message: "Please enter an account number" },
                            ] : []
                        }
                        initialValue={bankDetail && (bankDetail?.secondary?.account_number && (bankDetail?.secondary?.account_number !== "undefined" && bankDetail?.secondary?.account_number !== "null")) ? bankDetail?.secondary?.account_number : null}
                      >
                        <Input />
                      </Form.Item>
                    </div>:""  /**Account number field */
                  }
                 

                 {secondaryPaymentMethod==="bank"?
                  <div className="col-md-6">
                    <Form.Item
                      label="Bank Name"
                      name="secondary_bank_name"
                      rules={
                        activeAccount === 1 ?
                          [
                            { required: true, message: "Please enter the bank name" },
                          ] : []}
                      initialValue={bankDetail && (bankDetail?.secondary?.bank_name && (bankDetail?.secondary?.bank_name !== "undefined" && bankDetail?.secondary?.bank_name !== "null")) ? bankDetail?.secondary?.bank_name : null}
                    >
                      <Select
                        showSearch
                        placeholder="Select Bank"
                        filterOption={(input, option) =>
                          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        style={{fontSize:'14px'}}
                        size={'large'}
                      >
                      {
                        getSelectOptions(BankLists, "Sorry no country Found")
                      }

                    </Select>
                    </Form.Item>
                    </div>:""  /**bank name field */
                  }


                </Row>
              </div>
            </section>
            <section className="section-break-2">
              <div className="col-md-12">
                <SpinButton loading={updating} text="Update Banking Details" />
              </div>
            </section> {/**submit functions */}

          </Form> :
          <Row className="justify-content-center">
            <CircularLoader size={"35px"} />
          </Row>
        }

      </div>
    </section>
  )
}


export default BankingDetail