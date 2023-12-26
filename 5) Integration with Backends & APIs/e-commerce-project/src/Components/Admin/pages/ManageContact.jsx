import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminHeader'
import AdminSidebar from '../AdminSidebar'
import AdminFooter from '../AdminFooter'
import axios from 'axios';
import DataTable from 'react-data-table-component';
import { BASE_URL } from '../../../api/constant'
import { ExportToExcel } from './ExportToEcel';

export default function ManageContact() {

  // EXPORT TO EXAL
  const fileName = "myfile"; // here enter filename for your excel file


  // ADD DATATABLE 
  const [contact, setContact] = useState([]);
  const [search, setSearch] = useState("");
  const [filtercontact, setFilterContact] = useState([]);

  const getcontactdata = async () => {
    try {
      const response = await axios.get(BASE_URL+"contatc");
      setContact(response.data);
      setFilterContact(response.data);
    }
    catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getcontactdata();
  }, [])

  useEffect(() => {
    const result = contact.filter(thiscontact => {
      return thiscontact.Name.toLowerCase().match(search.toLocaleLowerCase())
    });

    setFilterContact(result);
  }, [search])

  // DELET DATA FROM TABLE
  function deletUser(id) {
    axios.delete(BASE_URL+`contatc/${id}`)
      .then((response) => {
        console.warn(response)
        getcontactdata();
      })
  }


  const columns = [
    {
      name: "No.",
      selector: (row) => row.id,
    },
    {
      name: "FirstName",
      selector: (row) => row.Name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.Email,
    },
    {
      name: "Mobile",
      selector: (row) => row.Subject,
    },
    {
      name: "Message",
      selector: (row) => row.Message,
    },
    {
      name: "Action",
      cell: (row) =>
        <i className=' cursor-pointer bi bi-trash text-danger' onClick={() => deletUser(row.id)}></i>
    }
  ] 

  return (
    <>
      <AdminHeader />
      <AdminSidebar />
      <div className='managecontact'>
        <div className='container m-0 p-0'>
          <h1 className='mt-5 text-center'>Manage Contacts</h1>
          {/* Data Table  */}
          <DataTable style={{ width: "100%" }} columns={columns} data={filtercontact}
            pagination
            fixedHeader
            fixedHeaderScrollHeight='350px'
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            subHeader
            subHeaderComponent={
              <div className='d-flex justify-content-between w-100'>
                <input type='text'
                  placeholder='search'
                  className='form-control w-50'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {/* <ExportToExcel apiDate={contact} fileName={fileName} /> */}

                 <ExportToExcel apiData={contact} fileName={fileName} />              
            </div>
            }
          />
        </div>
      </div>
      <AdminFooter />
    </>
  )
}
