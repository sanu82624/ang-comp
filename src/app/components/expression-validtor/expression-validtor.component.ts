import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expression-validtor',
  templateUrl: './expression-validtor.component.html',
  styleUrls: ['./expression-validtor.component.scss']
})
export class ExpressionValidtorComponent implements OnInit {

  data: string = "";
  expression: Array<string> = ["@c~##[==|<|>|<>|<=|>=]~@v", "@c~!![*|+|-|/]~@v", "@c~!![*|+|-|/]~@c", "@c~#![IN|NOT IN]~@[v]"];
  tableList: Array<Table> = [{name: "tbl1", columns: [{name:"col1",typ: ColumnTypes.TEXT}, {name:"col2",typ: ColumnTypes.NUMBER}, {name:"col3",typ: ColumnTypes.TEXT}]}];
  isValid: boolean = false;
  
  constructor() { }

  currentColumn: Column;
  tableName: string = "tbl1";
  startNameChar: string = "{";
  endNameChar: string = "}";

  ngOnInit() {
  }

  getColumnListByTableName(tbl: string): Array<Column>{
    for(var index=0; index<this.tableList.length; index++){
      if(this.tableList[index].name === tbl){
        return this.tableList[index].columns;
      }
    }
    return [];
  }

  checkColumn(name: string): boolean{
    if(name.indexOf(this.startNameChar) === 0){
      name = name.substr(1);
    }
    if(name.lastIndexOf(this.endNameChar)){
      name = name.substring(0, name.length-1);
    }
    for(var index=0; index<this.getColumnListByTableName(this.tableName).length; index++){
      if(this.getColumnListByTableName(this.tableName)[index].name === name){
        this.currentColumn = this.getColumnListByTableName(this.tableName)[index];
        return true;
      }
    }
    return false;
  }

  isNumber(val: any){
    if(val.match(/^\d+$/)){
      return true;
    }else if(val.match(/^d\.\d+$/)){
      return true;
    }
    return false;
  }

  isValidCheck(value: string, expression: string){
    var expParts = expression.split("~");
    for(var inPrt=0; inPrt<expParts.length; inPrt++){

      //column chk
      if(expParts[inPrt] === "@c"){
        if(value.indexOf(this.startNameChar) > 0 || value.indexOf(this.endNameChar) === -1 || value.indexOf(this.startNameChar) > value.indexOf(this.endNameChar)){
          return false;
        }
        var colName = value.substr(value.indexOf(this.startNameChar), (value.indexOf(this.endNameChar) - value.indexOf(this.startNameChar)+1));
        if(!this.checkColumn(colName)){
          return false;
        }
        value = value.substr(colName.length).trim();
      }

      //table check
      if(expParts[inPrt] === "@t"){
        
      }

      //[==|<|>|<>|<=|>=] check
      if(expParts[inPrt].indexOf("##[") === 0){
        expParts[inPrt] = expParts[inPrt].replace("##[", "").replace("]", "");
        var operands = expParts[inPrt].split("|");
        var selectedOperand = "";
        for(var inOpd=0; inOpd<operands.length; inOpd++){
          if(value.indexOf(operands[inOpd]) === 0){
            selectedOperand = operands[inOpd];
            break;
          }
        }
        if(selectedOperand.length === 0){
          return false;
        }else{
          value = value.substr(selectedOperand.length).trim();
        }
      }

      //[*|+|-|/] check
      if(expParts[inPrt].indexOf("!![") === 0){
        expParts[inPrt] = expParts[inPrt].replace("!![", "").replace("]", "");
        var operands = expParts[inPrt].split("|");
        var selectedOperand = "";
        for(var inOpd=0; inOpd<operands.length; inOpd++){
          if(value.indexOf(operands[inOpd]) === 0){
            selectedOperand = operands[inOpd];
            break;
          }
        }
        if(selectedOperand.length === 0){
          return false;
        }else{
          value = value.substr(selectedOperand.length).trim();
        }
      }

      //[IN|NOT IN] check
      if(expParts[inPrt].indexOf("#![") === 0){
        expParts[inPrt] = expParts[inPrt].replace("#![", "").replace("]", "");
        var operands = expParts[inPrt].split("|");
        var selectedOperand = "";
        var upVal = value.toUpperCase();
        for(var inOpd=0; inOpd<operands.length; inOpd++){
          if(upVal.indexOf(operands[inOpd]) === 0){
            selectedOperand = operands[inOpd];
            break;
          }
        }
        if(selectedOperand.length === 0){
          return false;
        }else{
          value = value.toUpperCase().substr(selectedOperand.length).trim();
        }
      }

      //value
      if(expParts[inPrt] === "@v"){
        var val = (value.split(" ").length > 0) ? value.split(" ")[0] : "";
        if(!this.isValueValidated(val)){
          return false;
        }
      }

      //value[]
      if(expParts[inPrt] === "@[v]"){
        var val = value.substring(value.indexOf("["), value.indexOf("]"));
        var vals = val.split(",");
        for(var vInd=0; vInd<vals.length; vInd++){
          if(!this.isValueValidated(vals[vInd])){
            return false;
          }
        }
      }

      console.log(value);
    }
    return true;
  }

  isValueValidated(val: string): boolean{
    if(this.currentColumn.typ === ColumnTypes.NUMBER && val === ""){
      return false;
    }
    if(this.currentColumn.typ === ColumnTypes.TEXT && val.indexOf("'") < 0 && val.indexOf("\"") < 0){
      return false;
    }
    if(this.currentColumn.typ === ColumnTypes.NUMBER && !this.isNumber(val)){
      return false;
    }
    if(this.currentColumn.typ === ColumnTypes.TEXT && val.indexOf("'") >= 0 && val.match(/'/g).length < 2){
      return false;
    }
    if(this.currentColumn.typ === ColumnTypes.TEXT && val.indexOf("\"") >= 0 && val.match(/"/g).length < 2){
      return false;
    }
    if(val.indexOf(this.startNameChar) > -1 && val.indexOf(this.endNameChar) > -1){
      return false;
    }
    return true;
  }

  onValidationClick(){
    var value = this.data.trim();
    for(var inExp=0; inExp<this.expression.length; inExp++){
      if(this.isValidCheck(value, this.expression[inExp])){
        this.isValid = true;
        return;
      }
    }
    this.isValid = false;
  }
}

export class Column{
  name: string;
  typ: ColumnTypes;
}

export class Table{
  name: string;
  columns: Array<Column>;
}

export enum ColumnTypes{
  TEXT = "text",
  NUMBER = "number"
}