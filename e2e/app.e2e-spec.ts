import { ClientsGestionStockProduitsPage } from './app.po';

describe('clients-gestion-stock-produits App', function() {
  let page: ClientsGestionStockProduitsPage;

  beforeEach(() => {
    page = new ClientsGestionStockProduitsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
