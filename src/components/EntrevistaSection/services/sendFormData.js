export const sendFormData = async (data) => {
  try {
    const request = await window.fetch(
      `https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8`,
      {
        method: "POST",
        mode: "no-cors",
        body: new FormData(data),
      }
    );
    return request;
  } catch (error) {
    console.log("file: sendFormData.js ~ line 5 ~ sendFornData ~ error", error);
  }
};
