import React,{useState,useEffect} from 'react';
import AuthenticationService from '../sevices/AuthenticationService';
import '../styles/DealerProfile.css';

function DealerProfile() {
    //state management
    const [dealerList, setDealerList] = useState([]);
    useEffect(() => {
     fetchDealerInfo();
    }, []);
    const fetchDealerInfo = async () => { 
        try{
            const data = await AuthenticationService.getDealerInfo();
            setDealerList(data);
        }
        catch(error){
            console.error("Eroor Fetching Dealer Info : "+error);
        }   
     };

  return (
    <>
    <div>
    <h2 style={{color:'yellow'}}>Dealer Information</h2>
          <table className="dealer-table" cellPadding={10} cellSpacing={20}>
            <thead>
              <tr>
                <th>Dealer Id</th>
                <th>Full Name</th>
                <th>Telephone</th>
                <th>Email</th>
                <th>Street</th>
                <th>City</th>
                <th>Pincode</th>
                {/* Add more table headers as needed */}
              </tr>
            </thead>
            <tbody>
              {dealerList.map((dealer) => (
                <tr key={dealer.id}>
                  <td>{dealer.id}</td>
                  <td>{dealer.fname} &nbsp; {dealer.lname}</td>
                  <td>{dealer.phoneNo}</td>
                  <td>{dealer.email}</td>
                  <td>{dealer.street}</td>
                  <td>{dealer.city}</td>
                  <td>{dealer.pincode}</td>
                  {/* Add more table cells as needed */}
                </tr>
              ))}
            </tbody>
          </table>
    </div>
    </>
  )
}

export default DealerProfile
