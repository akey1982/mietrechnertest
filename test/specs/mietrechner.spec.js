const MietrechnerPage = require('../pageobjects/mietrechner.page');

describe('test mietrechner', () => {
    it('positiv case rent: 1000 interest: 2.5', async () => {
        await MietrechnerPage.open();
        await MietrechnerPage.handleCookies();
        await MietrechnerPage.setValues('1000','2,5')
        await MietrechnerPage.clickTocal();
        await MietrechnerPage.waitFor(await MietrechnerPage.eleResult)
        await expect(MietrechnerPage.table).toBeElementsArrayOfSize(12) 

    });

    it('positiv case rent: 1326 interest: 1.5', async () => {
        await MietrechnerPage.open();
        await MietrechnerPage.handleCookies();
        await MietrechnerPage.setValues('1326','1,5')
        await MietrechnerPage.clickTocal();
        await MietrechnerPage.waitFor(await MietrechnerPage.eleResult)
        await expect(MietrechnerPage.table).toBeElementsArrayOfSize(12) 

    });

    it('negativ case rent: 1500 interest: 1.5', async () => {
        await MietrechnerPage.open();
        await MietrechnerPage.handleCookies();
        await MietrechnerPage.setValues('1326','-1')
        await MietrechnerPage.clickTocal();
        await MietrechnerPage.waitFor(await MietrechnerPage.eleResult)
        await expect(MietrechnerPage.table).toBeElementsArrayOfSize(0) 

    });
    
    
    it('negativ case rent: -1000 interest: 1.5', async () => {
        await MietrechnerPage.open();
        await MietrechnerPage.handleCookies();
        await MietrechnerPage.setValues('-1000','-1')
        await MietrechnerPage.clickTocal();
        await MietrechnerPage.waitFor(await MietrechnerPage.eleResult)
        await expect(MietrechnerPage.table).toBeElementsArrayOfSize(0) 
        await expect(MietrechnerPage.errorInfo).toExist()

    });

    it.only('stress test case rent: 100000 interest: 10.5', async () => {
        await MietrechnerPage.open();
        await MietrechnerPage.handleCookies();
        await MietrechnerPage.setValues('100000','10,5')
        await MietrechnerPage.clickTocal();
        await MietrechnerPage.waitFor(await MietrechnerPage.eleResult)
        await expect(MietrechnerPage.table).toBeElementsArrayOfSize(12) 

    });
    


});


