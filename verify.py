from playwright.sync_api import sync_playwright, expect
import time

def verify_todo():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Go to todo app using localhost
        page.goto('http://localhost:5173/todo')
        page.wait_for_load_state('networkidle')

        # Take a screenshot to debug
        page.screenshot(path='/home/jules/verification/debug.png')

        # Test input ARIA label
        input_locator = page.locator('input[aria-label="Nombre de la tarea"]')
        expect(input_locator).to_be_visible()
        input_locator.fill("Task test")

        # Test select ARIA labels
        type_locator = page.locator('select[aria-label="Tipo de tarea"]')
        expect(type_locator).to_be_visible()

        priority_locator = page.locator('select[aria-label="Prioridad de la tarea"]')
        expect(priority_locator).to_be_visible()

        # Add the task
        page.locator('button', has_text='Añadir').click()

        # Find the label wrapping the checkbox and click it instead of the input directly
        task_label = page.locator('label', has_text='Task test')
        expect(task_label).to_be_visible()
        task_label.click()

        # Let Vue update the UI with text-decoration
        time.sleep(0.5)

        # Take a screenshot
        page.screenshot(path='/home/jules/verification/verification.png')

        browser.close()

if __name__ == '__main__':
    verify_todo()
