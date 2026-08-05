from playwright.sync_api import sync_playwright
import re

def verify():
    with open('/app/real-world-vue/dev.log', 'r') as f:
        log_content = f.read()
    match = re.search(r'http://localhost:(\d+)', log_content)
    port = match.group(1) if match else "5173"

    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(record_video_dir='/home/jules/verification/videos')
        page = context.new_page()
        page.goto(f'http://localhost:{port}/todo')
        page.wait_for_timeout(1000)

        # Wait for static elements
        page.wait_for_selector('input[type="text"]')

        # Fill the input
        page.fill('input[type="text"]', 'Test task')

        # Click the add button.
        page.locator('button').first.click()

        page.wait_for_timeout(1000)

        # Click the newly created label to check the checkbox
        page.locator('label').first.click()

        page.wait_for_timeout(1000)

        page.screenshot(path='/home/jules/verification/screenshots/verification.png')
        context.close()
        browser.close()

if __name__ == '__main__':
    verify()
