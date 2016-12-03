// import React, { Component } from 'react';
// import { browserHistory } from 'react-router';
//
// const styles = {
//   root: {
//     display: 'flex',
//     width: '100%',
//     justifyContent: 'space-around',
//     alignItems: 'center'
//   }
// }
//
// const checkSize = size => {
//   switch (size) {
//     case 'large':
//       return 150;
//     case 'medium':
//       return 100;
//     default:
//       return 50;
//   }
// };
//
// const Button = ({ children, color, size, onClick }) => (
//   <div
//     onClick={onClick}
//     style={{
//       padding: 10,
//       border: '1px solid black',
//       backgroundColor: color,
//       width: checkSize(size)
//     }}
//   >
//     {children}
//   </div>
// );
//
// const JustFun = () => (
//   <div style={styles.root}>
//     <Button color="yellow" onClick={() => browserHistory.push('/login')}>Small</Button>
//     <Button size="medium" color="red" onClick={() => alert('Medium')}>Medium</Button>
//     <Button size="large" color="blue" onClick={() => alert('Large')}>Large</Button>
//   </div>
// );
//
// export default JustFun;
//
//
// class JustFun extends Component {
//   componentWillMount() {
//     alert(this.props.params.id)
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.props.params.user}</h1>
//         <h1>{this.props.params.id}</h1>
//       </div>
//     );
//   }
// }
//
// export default JustFun;
