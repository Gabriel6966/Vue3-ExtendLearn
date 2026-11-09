from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    page.goto("http://localhost:5173/todo")
    page.wait_for_timeout(1000)

    # Let's add a task first and then click it
    page.get_by_placeholder("Añadir tarea").fill("Test Task")
    page.get_by_role("button", name="Añadir").click()
    page.wait_for_timeout(1000)

    # Now click the label text we just added
    page.get_by_text("Test Task").click()
    page.wait_for_timeout(1000)

    os.makedirs("/home/jules/verification/screenshots", exist_ok=True)
    page.screenshot(path="/home/jules/verification/screenshots/verification.png")
    page.wait_for_timeout(1000)

if __name__ == "__main__":
    os.makedirs("/home/jules/verification/videos", exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="/home/jules/verification/videos"
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
