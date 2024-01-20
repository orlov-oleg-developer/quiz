import { fireEvent, render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton.test', () => {
    test('Test render', () => {
        render(<RadioButton data-testid={'radio'} />);
        const checkbox = screen.getByTestId('radio')
        //@ts-ignore
        expect(checkbox).toBeInTheDocument();
        fireEvent.click(checkbox)
    });
});
