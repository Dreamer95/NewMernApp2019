import React, { Component } from 'react';
import ColorPicker from './../../components/colorPickers/ColorPicker';
import SizeSetting from './../../components/colorPickers/SizeSetting';
import Reset from './../../components/colorPickers/Reset';
import Result from './../../components/colorPickers/Result';
import ColorTable from './../../components/colorPickers/ColorTable';
import AddColor from './../../components/colorPickers/AddColor';
import { connect } from 'react-redux';
import * as Action from './../../actions/ColorPicker/colorAction';

class ColorPickerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myColor: 'red',
      fontZise: 14,
      isDisplay: false,
      isDisplayTask: false,
      colorEdit : null
    };
  }

  onSetColor = (param) => {
    this.setState({
      myColor: param
    });
  }

  onSetFontSize = (param) => {
    this.setState({
      fontZise: (this.state.fontZise + param >= 8 && this.state.fontZise + param <= 36) ? this.state.fontZise + param : this.state.fontZise
    });
  }

  onSettingDefault = (value) => {
    if (value) {
      this.setState({
        myColor: 'red',
        fontZise: 14
      })
    }
  }

  onToggle = () => {
    var temp = !this.state.isDisplay;
    this.setState({
      isDisplay: temp
    })
  }

  onToggleTask = () => {
    if(this.state.isDisplayTask && this.state.colorEdit !== null){
      this.setState({
        colorEdit : null
      })
    }else{
      this.setState({
        isDisplayTask: !this.state.isDisplayTask,
        colorEdit : null
      })
    }   
  }

  onCloseTask = () => {
    this.setState({
        isDisplayTask : false,
        colorEdit : null
    })
  }

  findColor = (list,name) => {
      let result = -1;
      list.map((color,index)=>{
          if(color.colorName === name){            
            result = index           
          } 
          return result;        
      })
      return result;
  }

  onAddColor = (color) => {
    var {colors} = this.props;
    let index = this.findColor(colors,color.colorName)
    if(index === -1){
      this.props.onAddNewColor(color);
      this.onToggleTask();
    }else{
      alert('Mau nay da co ! Them mau khac nhe .')
    }
    
    
  }

  onUpdateColor = (color) => {    
    var {colors} = this.props;
    let index = this.findColor(colors,color.colorName)
    if(index === -1 || (index !== - 1 && colors[index]._id === color.id)){
      this.props.onUpdateColor(color);
      this.onCloseTask();
    }else{
      alert('Mau nay da co ! Them mau khac nhe .')
    }
    
  }

  onDelete = (id) => {
    if(confirm('Are you want to delete ?')){ //eslint-disable-line
      this.props.onDeleteColor(id);
    }
   
  }

  onUpdate = (color) => {   
    this.setState({
      isDisplayTask : true,
      colorEdit : color
    })
  }

  componentDidMount() {
    this.props.onGetColors();
  }


  showColorItem = (colors) => {
    var result = null;
    if(colors.length > 0){
        result = colors.map((color,index)=>{
            return  <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{color.colorName}</td>
                        <td>
                            <span style={this.showColor(color.colorName)}>

                            </span>
                        </td>
                        <td>                                
                            <button type="button" 
                                    className="btn btn-danger"
                                    onClick = {()=>this.onUpdate(color)}
                            >Sửa</button>&nbsp;
                            <button type="button" 
                                    className="btn btn-danger"
                                    onClick={()=>this.onDelete(color._id)}
                            >Xoá</button>
                        </td>
                    </tr>
        })
    }
    return result
}

showColor = (color) => {
    return {
        backgroundColor : color
    }
}

render() {
    var { myColor, fontZise, isDisplay, isDisplayTask, colorEdit } = this.state;
    var { colors } = this.props;
    return (
      <div className="container-fluid mt myFont">

        <div className="row-fluid">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ColorPicker p_Color={myColor} onReceiveColor={this.onSetColor}
              colors={colors} />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting p_fontSize={fontZise} onChangeSize={this.onSetFontSize} />
            <Reset onSettingDefault={this.onSettingDefault} onToggle={this.onToggle} />
          </div>
        </div>
        <div className={isDisplay ? " d-block" : " d-none"}>
          <div className={isDisplayTask ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "d-none"}>
            <AddColor onAddColor={this.onAddColor} 
                      colorEdit={colorEdit} 
                      onUpdateColor={this.onUpdateColor}
                      onClose={this.onCloseTask}
                      />
          </div>

          <div className={isDisplayTask ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button"
              className="btn btn-success float-left"
              onClick={this.onToggleTask}
            >Thêm màu</button>
            <ColorTable >
                  {this.showColorItem(colors)}
            </ColorTable>
          </div>

        </div>
        <Result p_Color={myColor} p_fontSize={fontZise} />
      </div>
    );
  }

}

const MapStateToProps = (state) => {
  return {
    colors: state.colorList
  }
}

const MapDispatchToProps = (dispatch, props) => {
  return {
    onGetColors: () => {
      dispatch(Action.actGetColorsRequest())
    },
    onAddNewColor: (color) => {
      dispatch(Action.actAddColorRequest(color))
    },
    onDeleteColor: (id) => {
      dispatch(Action.actDeleteColorRequest(id))
    },
    onUpdateColor : (color) => {
      dispatch(Action.actUpdateColorRequest(color))
    }
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(ColorPickerPage);
