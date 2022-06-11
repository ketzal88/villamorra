export const sendFormData = async (data) => {
  try {
    const request = await window.fetch(
      "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
      {
        method: "POST",
        mode: "no-cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      }
    );
    const response = request;
    console.log(
      "file: sendFormData.js ~ line 17 ~ sendFormData ~ request",
      request
    );
    return response;
  } catch (error) {
    console.log("file: sendFormData.js ~ line 5 ~ sendFornData ~ error", error);
  }
};
