import {Dimensions, Alert} from 'react-native'


//tablet portrait dimensions
const tablet = {
  width: 552,
  height: 960,
};

class Device {
  getPortraitDimensions(){
    const {width, height} = Dimensions.get("window");

    return {
      width: Math.min(width, height),
      height: Math.max(width, height),
    }
  }

  getLandscapeDimensions(){
    const {width, height} = Dimensions.get('window');

    return {
      width: Math.max(width, height),
      height: Math.min(width, height),
    }
  }

  isTablet(){
    const dimension = this.getPortraitDimensions();
    return dimension.height >= tablet.height;
  }
  
  isPhone(){
    const dimension = this.getPortraitDimensions();
    return dimension.height < tablet.height;
  }
}

const device = new Device();
export default device;
