import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import App from "./App"

test('should display error message', async() => { 
    render(<App/>)
    const button = screen.getByRole('button', { name: "Look up" });
    fireEvent.click(button);

    expect(screen.getByText("Please enter a word before searching.")).toBeInTheDocument();
})

test('should display "hello" and all the info from WordInfo', async () => { 
    render(<App/>)
    
    const button = screen.getByRole('button', { name: "Look up" });
    fireEvent.click(button);

    expect(screen.getByText("Please enter a word before searching.")).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'hello' } });

    fireEvent.click(button);

    await waitFor(() => {
        expect(screen.getByText("hello")).toBeInTheDocument();
    })
})

test('should display "hello" and all the info from WordInfo', async () => { 
    render(<App/>)
    
    const button = screen.getByRole('button', { name: "Look up" });
    fireEvent.click(button);

    expect(screen.getByText("Please enter a word before searching.")).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'hello' } });

    fireEvent.click(button);

    await waitFor(() => {
        expect(screen.getByText("hello")).toBeInTheDocument();
    })
})