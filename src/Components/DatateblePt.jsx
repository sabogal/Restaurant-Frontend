import React, {useState} from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import { Edit, Trash2 } from "lucide-react";

import { domain } from "./urls";
import AddProducts from "./Products/addProducts";

export const DatateblePt = (props) => {
  let productos = props.info;
  let products = Array.isArray(productos.data) ? productos.data : [];
  console.log(products);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const TABLE_HEAD = ["id", "NAME", "TEXT", "PRECIO", "IMAGEN", ""];

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <main className="Dashboard ">
      <div className="flex h-auto  overflow-x-hidden">
        <div className="max-h-screen w-full p-12">
        
          <div className="h-max content-center border-gray-300 border-2 rounded-lg text-gray-600 p-4">
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
                  {products.map(({ id, name, description, price, image }) => (
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
                          {name}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {description}
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
                  
                            <img className="w-12 rounded-lg" src={domain + image} alt="" />
                 
                          
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
                        >
                          <a style={{
                            display: "inline-flex",
                            gap: "10px",
                            justifyContent: "center",
                            alignItems: "center",
                          }}>
                            Delete
                            <Trash2 />
                          </a>

                        </Typography>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
            <div className="p-4">
              <AddProducts />
            </div>

          </div>

        </div>
      </div>

      
    </main>
  );
};
