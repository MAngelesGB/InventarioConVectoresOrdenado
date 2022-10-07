class Inventario{
    constructor(){
        this.inventario = new Array(); 
    }

    agregar(producto)
    {
        this.inventario.push(producto);
    }

    buscar(codigo)
    {
        let primerValor  = 0; 
        let ultimoValor = this.inventario.length - 1;
        let valorMedio = 0; 
        
        while(primerValor <= ultimoValor)
        {
            valorMedio = Math.floor((primerValor+ultimoValor)/2);

            if(this.inventario[valorMedio].getCodigo() === codigo)

                return this.inventario[valorMedio];

            else if(this.inventario[valorMedio].getCodigo() > codigo)
                ultimoValor = valorMedio -1; 

            else
                primerValor = valorMedio +1;

        }

        return null; 
    }

    eliminar(codigo)
    {
        /*
        for(let i = 0; i <= this.inventario.length-1; i++) 
        {
            if(codigo === this.inventario[i].getCodigo())
            {
                for(let j = i; j <= this.inventario.length-1; j++)
                {   
                    this.inventario[j]= this.inventario[j+1];
                }
                this.inventario.pop();
            }     
        }
        */
    }

    listar()
    {
        let listaProductos = ''; 

       this.inventario.forEach((producto) => {
            listaProductos += producto.info();
       });

        return listaProductos; 
    }

    listarInverso()
    {
        let listaInverso = ''; 

        for(let i = this.inventario.length-1; i >= 0; i--)
        {
            listaInverso += this.inventario[i].info(); 
        }

        return listaInverso; 
    }
}

 













