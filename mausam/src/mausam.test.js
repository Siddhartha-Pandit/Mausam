import { screen  , render} from '@testing-library/react';
import Main from '../src/Main'

test('Mausam Testing.. ' , ()=>{
    render(<Main />);
    const mainElement = screen.getByTestId('main-1');
    expect(mainElement).toBeInTheDocument()
})