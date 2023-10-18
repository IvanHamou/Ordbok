import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import App from "./App"

test('should display error message if there is no input', async() => { 
    render(<App/>)
    const button = screen.getByRole('button', { name: "Look up" });
    fireEvent.click(button);

    expect(screen.getByText("Please enter a word before searching.")).toBeInTheDocument();
})

test('should display error message if word does not exist', async() => { 
    render(<App/>)
    const button = screen.getByRole('button', { name: "Look up" });
    fireEvent.click(button);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'dsfsdfsdf' } });

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
        expect(screen.getByText("noun")).toBeInTheDocument();
        expect(screen.getByText("verb")).toBeInTheDocument();
        expect(screen.getByText("interjection")).toBeInTheDocument();
    })
})