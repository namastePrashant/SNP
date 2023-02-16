
export default {
    defaultPlayIndex: 0,


    theme: 'light',


    bounds: 'body',


    quietUpdate: false,

    clearPriorAudioLists: true,

    autoPlayInitLoadPlayList: true,


    preload: true,


    glassBg: false,


    remember: false,


    remove: true,

    defaultPosition: {
        right: 100,
        bottom: 120,
    },

    mode: 'full',


    once: false,

    autoPlay: true,

    toggleMode: false,


    showMiniModeCover: true,


    showMiniProcessBar: false,


    drag: true,


    seeked: true,


    showMediaSession: true,


    showProgressLoadBar: true,


    showPlay: true,

    showReload: false,



    showThemeSwitch: false,


    showLyric: true,

    showDownload:false,

    extendsContent: null,

    defaultVolume: 1,


    playModeShowTime: 600,


    loadAudioErrorPlayNext: true,


    autoHiddenCover: false,

    spaceBar: true,
    responsive: false,

    getContainer() {
        return document.body
    },

    onBeforeDestroy(currentPlayId, audioLists, audioInfo) {


        return new Promise((resolve, reject) => {

            if (window.confirm('Are you confirm destroy the player?')) {

                resolve()
            } else {

                reject()
            }
        })
    },

    onDestroyed(currentPlayId, audioLists, audioInfo) {

    },

    onCoverClick(mode, audioLists, audioInfo) {

    },




}