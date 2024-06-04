var clickOk = require("ClickOk")

class ServiceSteps {
    getNameAndAge() {
        var httpObject = aqHttp.CreateGetRequest("https://api.agify.io/?name=gega");
        var response = httpObject.Send();
        var responseObject = JSON.parse(response.Text);

        Project.Variables.name = responseObject.name;
        Project.Variables.age = responseObject.age;
        return this;
    }

    getLocationInfo() {
        var httpObject = aqHttp.CreateGetRequest("https://ipinfo.io/161.185.160.93/geo");
        var response = httpObject.Send();
        var responseObject = JSON.parse(response.Text);

        Project.Variables.city = responseObject.city;
        Project.Variables.state = responseObject.region;
        Project.Variables.zip = responseObject.postal;
        return this;
    }

    setName() {
        Aliases.Orders.OrderForm.Group.Customer.SetText(Project.Variables.name);
        return this;
    }

    setAge() {
        Aliases.Orders.OrderForm.Group.Price.SetText(Project.Variables.age);
        return this;
    }

    setCity() {
        Aliases.Orders.OrderForm.Group.City.SetText(Project.Variables.city);
        return this;
    }

    setState() {
        Aliases.Orders.OrderForm.Group.State_.SetText(Project.Variables.state);
        return this;
    }

    setZip() {
        Aliases.Orders.OrderForm.Group.Zip.SetText(Project.Variables.zip);
        clickOk();
        return this;
    }
}

module.exports = new ServiceSteps();
