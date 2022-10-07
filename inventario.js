class Inventario{
    constructor(){
        this.inventario = new Array(); 
    }

    agregar(codigo, producto)
    {
        let agregado=false;
       if((this.inventario.length === 0) || (this.inventario[this.inventario.length-1].getCodigo() < codigo))
       {
            this.inventario.push(producto);
       }
       else 
        {
            let fin=this.inventario.length;
            for(let i = 0; i < fin && !agregado; i++)
            {
                if(this.inventario[i].getCodigo() > codigo)
                {   
                    
                    for(let j = this.inventario.length-1; j >= i; j--)
                    {   
                        this.inventario[j+1] = this.inventario[j];
                    }
                    this.inventario[i] = producto;
                    agregado=true;
                }
            }
        }
        
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
        let primerValor  = 0; 
        let ultimoValor = this.inventario.length - 1;
        let valorMedio = 0; 
        
        while(primerValor <= ultimoValor)
        {
            valorMedio = Math.floor((primerValor+ultimoValor)/2);

            if(this.inventario[valorMedio].getCodigo() === codigo)
            {
                for(let j = valorMedio; j <= ultimoValor; j++)
                {   
                    this.inventario[j]= this.inventario[j+1];
                }
                this.inventario.pop();
            }
            else if(this.inventario[valorMedio].getCodigo() > codigo)
            { 
                ultimoValor = valorMedio -1; 
            }
            else
            {
                primerValor = valorMedio +1;
            }

        }
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

 













