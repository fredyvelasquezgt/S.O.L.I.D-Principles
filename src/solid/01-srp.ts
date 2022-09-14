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
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });

        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
        }
    
        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    
    }
    
    class CartBloc {


        private itemsInCart: Object [] = [];


        addToCart(productId: number){
            console.log('agregando al carrito...', productId)

        }
    }



    const productBloc = new ProductBloc();
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.addToCart(10);







})();