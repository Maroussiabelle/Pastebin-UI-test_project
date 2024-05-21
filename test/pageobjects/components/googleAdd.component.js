export default class GoogleAdd{
    get googleAddWindow(){
        return $('vli.vliIgnore');
    }


     async  tryCloseGoogleAd () {
        try {
            await this.googleAddWindow.click()
        } catch (ignored) {}
    }
}