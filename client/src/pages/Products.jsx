export const Products = () => {
    return(
        <div className="productscss">
            <form action="post" id="form-product-register">
                <div class="row g-3">
                    <div class="col-md-3">
                        <label for="formGroupProducts" class="form-label">Nombre</label>
                        <input type="text" class="form-control" placeholder="Nombre del objeto a vender" required/>
                    </div>
                    <div class="col-md-12">
                    <label for="formGroupProducts" class="form-label">Descripción</label>
                        <input type="text" class="form-control" placeholder="Descripción del producto, datos específicos, que incluye, garantia, etc." required/>
                    </div>
                    <div class="col-md-12">
                    <label for="formGroupProducts" class="form-label">Imagen</label>
                        <input type="text" class="form-control" placeholder="URL de la imagen"  required/>
                    </div>
                    <div class="col-md-3">
                    <label for="formGroupProducts" class="form-label">Cantidad</label>
                        <input type="number" class="form-control" placeholder="1" required/>
                    </div>
                    <div class="col-md-3">
                    <label for="formGroupProducts" class="form-label">Precio unitario</label>
                        <input type="number" class="form-control" placeholder="$1,000" required/>
                    </div>
                    <div className="slidder">
                        <label for="formGroupProducts" class="form-label" className="labelS">Disponibilidad</label>
                        <br />
                        <label class="switch">
                            <input type="checkbox" required />
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <div class="col-md-6" className="submitProduct">
                        <button type="submit" class="btn btn-primary">Registrar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}