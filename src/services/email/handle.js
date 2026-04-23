async function  handle(){

    const gmail = {
        to: `user${Math.floor(Math.random() * 10000)}@gmail.com`
    };
    return gmail;

}
  export default handle;