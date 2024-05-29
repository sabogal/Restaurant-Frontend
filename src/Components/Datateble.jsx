import React, {useState} from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import { Edit, Trash2 } from "lucide-react";
import OpenModalButton from './Users/UsersAdd'

export const Datateble = (props) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const TABLE_HEAD = ["id", "NAME", "LAST NAME", "EMAIL", "PHONE", "DOCUMENT", ""];

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
                  {props.info.map(({ id, name, last_name, email, phone, document }) => (
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
                          {last_name}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {email}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {phone}
                        </Typography>
                      </td>
                      <td className="p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {document}
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
                        ><a style={{
                          display: "inline-flex",
                          gap: "10px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
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

                        </Typography>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
            <div className="p-4">
              <OpenModalButton />
            </div>

          </div>

        </div>
      </div>

      
    </main>
  );
};
