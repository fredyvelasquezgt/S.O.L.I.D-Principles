(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    //Encargado solo de trabajar con los productos
    class ProductService {

        private httpAdapter: Object;

        getProduct(id: number) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });

        }

        saveProduct(product: Product) {

        }

    }

    //Solo notifica a clientes y correo electronico
    class Mailer {

        private masterEmail: string = 'fredy@google.com';

        sendEmail(emailList: string[], template: 'to-client' | 'to-admin') {
            console.log('Guardando en base de datos', template );

        }

    }


    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        //Al hacer esto sigo manteniendo la responabilidad unica que tiene el product y el service
        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product)
        }
    
        notifyClients() {
            this.mailer.sendEmail(['fredyy@google.com'], 'to-client' )
        }
    
    }
    
    class CartBloc {

        private itemsInCart: Object [] = [];

        addToCart(productId: number){
            console.log('agregando al carrito...', productId)

        }
    }

    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc = new CartBloc();

    //Con la refactorizacion cambia pero sigue haciendo lo mismo
    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);







})();