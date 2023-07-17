import * as jsonfile from "jsonfile";

class Contact {
  id?: number = undefined;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  cargaDeData:Promise<any>
  load() {
    
    const json = jsonfile.readFile(__dirname + "/contacts.json");
    
    const cargaDeData = json.then(datos => { this.data = datos})
    return this.cargaDeData = cargaDeData;
    
    
    
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    // usar la version Async (writeFIle)
     const saveData = jsonfile.writeFile(__dirname + "/contacts.json", this.data);
     return saveData;
    
  }
  getOneById(id) {
    const encontrado = this.data.find((contacto) => {
      if (contacto?.id == id) {
        return true;
      }
    });

    return encontrado;
  }
}


// const user = new ContactsCollection()
// user.load()
export { ContactsCollection, Contact };
