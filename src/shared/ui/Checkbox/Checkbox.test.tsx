import { fireEvent, render, screen } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox.test', () => {
    test('Test render', () => {
        render(<Checkbox data-testid={'checkbox'} />);
        const checkbox = screen.getByTestId('checkbox')
        //@ts-ignore
        expect(checkbox).toBeInTheDocument();
        fireEvent.click(checkbox)
    });
});
