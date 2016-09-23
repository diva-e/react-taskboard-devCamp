
class UID{
  static id=0;

  static create(){
     return UID.id++;
  }

}


export default UID;
