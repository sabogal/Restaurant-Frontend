import React from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import { Download, Edit, Eye, Trash2 } from "lucide-react";
import jsPDF from "jspdf";


const generateInvoice = (data) => {
  // Crear un nuevo documento PDF
  const doc = new jsPDF();

  // Configuración del documento
  doc.setFont("helvetica");
  doc.setFontSize(12);

  // Agregar contenido a la factura
  doc.text("Factura", 20, 10);
  doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 20, 20);
  doc.text(`Número: ${data.number}`, 20, 30);
  doc.text(`Cliente: ${data.client}`, 20, 40);
  doc.text(`ID: ${data.id}`, 20, 50);

  // Guardar y descargar el PDF
  doc.save("factura.pdf");
};


const handleGenerateInvoice = () => {
  // Información para la factura (puedes obtener esto de tu componente)
  const invoiceData = {
    number: "001",
    client: "Nombre del Cliente",
    id: "12345",
  };

  // Llamar a la función para generar y descargar la factura
  generateInvoice(invoiceData);
};
export const DatatebleSale = (props) => {








  console.log(props)
  console.log(props.info)


  const TABLE_HEAD = ["id", "Price", "User", "CAR", "CAR NAME", ""];
  return (
    <main className="Dashboard ">
      <div className="flex h-auto  overflow-x-hidden">
        <div className="max-h-screen w-full p-12">

          <div className="h-max content-center bg-gray-300 text-gray-600 p-4">
            <Card className="h-96 w-full overflow-scroll overflow-y-hidden">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {props.info.map(({ id, price, fk_user, fk_car, car_name }) => (
                    <tr
                      key={IDBCursorWithValue}
                      className="even:bg-blue-gray-50/50"
                    >
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {id}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {price}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {fk_user}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {fk_car}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {car_name}
                        </Typography>
                      </td>

                      <td className="p-4">
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium"
                          style={{
                            display: "inline-flex",
                            gap: "10px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        ><a
                          onClick={handleGenerateInvoice}
                          style={{
                            display: "inline-flex",
                            gap: "10px",
                            justifyContent: "center",
                            alignItems: "center",

                          }}
                        >
                            Edit
                            <Edit />
                          </a>
                          
                          <a style={{
                            display: "inline-flex",
                            gap: "10px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}>
                            Delete
                            <Trash2 />
                          </a>
                          <a
                          onClick={handleGenerateInvoice}
                          style={{
                            display: "inline-flex",
                            gap: "10px",
                            justifyContent: "center",
                            alignItems: "center",

                          }}
                        >
                            
                            <Download />
                          </a>

                        </Typography>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
            <Button
              key="1"
              href="/add"
              className=
              "bg-blue-600 rounded-md p-2 m-4 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"

              aria-current={"page"}
            >
              Añadir
            </Button>

          </div>

        </div>
      </div>
    </main>
  );
};
