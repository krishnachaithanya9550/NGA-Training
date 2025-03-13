class ApiManager {
    static GetApiCall = async (url) => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('Token'),
          },
        });
        const token=localStorage.getItem(response.data);
        console.log("token is ",token);
        return await response.json();
      } 
      
      catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
      }
    };


    static PostApiCall = async (url, body) => {
    try {
   
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  } catch (err) {
    console.error("Error in posting:", err);
    alert('Error in posting: ' + err.message);
    throw err; 
  }
};

  }
  
  export default ApiManager;
  