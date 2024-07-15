import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
  { id: 1, nombre: "Rizadas", precioCompra: 1000, precioVenta: 1500, utilidad: 500, stock: 12, proveedor: "Yupi"},
  { id: 2, nombre: "Margaritas", precioCompra: 1600, precioVenta: 2500, utilidad: 900, stock: 15, proveedor: "Lays"},
  { id: 3, nombre: "Chocoramo", precioCompra: 2000, precioVenta: 3000, utilidad: 1000, stock: 8, proveedor: "Ramo"},

];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      nombre: "",
      precioCompra: "",
      precioVenta: "",
      utilidad: "",
      stock: "",
      proveedor: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].precioCompra = dato.precioVenta;
        arreglo[contador].utilidad = dato.utilidad;
        arreglo[contador].stock = dato.stock;
        arreglo[contador].proveedor = dato.proveedor;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el producto "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Producto</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre:
              </label>
              <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Precio Compra:
              </label>
              <input
                className="form-control"
                name="precioCompra"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.precioCompra}
              />
            </FormGroup>

             <FormGroup>
                   <label>
                       Precio Venta:
                   </label>

                   <input
                       className="form-control"
                            name="precioVenta"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.form.precioVenta}
                          />
             </FormGroup>

              <FormGroup>
                        <label>
                             Utilidad:
                        </label>

                        <input
                           className="form-control"
                                 name="utilidad"
                                 type="text"
                                 onChange={this.handleChange}
                                 value={this.state.form.utilidad}
                                 />
                          </FormGroup>
               <FormGroup>
                      <label>
                         Stock:
                      </label>

                      <input
                           className="form-control"
                           name="stock"
                           type="text"
                           onChange={this.handleChange}
                           value={this.state.form.stock}
                           />
               </FormGroup>

                <FormGroup>
                       <label>
                            Proveedor:
                       </label>

                       <input
                          className="form-control"
                          name="proveedor"
                          type="text"
                          onChange={this.handleChange}
                          value={this.state.form.proveedor}
                          />
                </FormGroup>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Producto</h3></div>
          </ModalHeader>

          <ModalBody>

          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;