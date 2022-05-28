import React from 'react';
import App from '../src/App';
import {render} from '@testing-library/react-native';
// import {RecoilRoot} from 'recoil';
import renderer from 'react-test-renderer';

// let props;
// let component;

// function getTempComponent(props) {
//   return (
//     <RecoilRoot>
//       <App {...props} />
//     </RecoilRoot>
//   );
// }

// describe('[App] render', () => {
//   props = {}; // fill test props
//   component = getTempComponent(props);
//   test('renders without crashing', () => {
//     const rendered = render(component);
//     expect(rendered).toMatchSnapshot();
//     expect(rendered).toBeTruthy();
//   });
// });

it('renders correctly', () => {
  renderer.create(<App />);
});
