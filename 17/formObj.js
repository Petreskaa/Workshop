const n = 12;
const formData = {

    userNameFirstCharacter: "",
    userName: "",
    lastName: "",
    email: "", 
    formatInputHelper: function(inputData) {
         return inputData !== undefined ? inputData.toLowerCase().trim(): ""
    },
    setUserName: function(_userName) {
        this.userName = this.formatInputHelper(_userName);
    },
    setLastName: function(_lastName) {
        this.lastName = this.formatInputHelper(_lastName);
    },
    setEmail: function(_email) {
        this.email = this.formatInputHelper(_email);
    },
    getFirtCharName: function() {
        return this.userName.length > 0 ? this.userName[0] : "";
    },
    getObjectData: function() {
        return {
            userDescripton: {
                userNameOutput: this.userName,
                lastNameOutput: this.lastName
            },
            userEmail: this.email.split(",")
        }
    }
}   

const userInputName = " TEST useR      "
formData.setUserName(userInputName)
formData.setLastName("  Smith")
formData.setEmail("test@gmail.com,user@yahoo.com")
const dataForSend = formData.getObjectData();
console.log("Send data:", dataForSend)
