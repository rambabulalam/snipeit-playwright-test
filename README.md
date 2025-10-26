Snipe-IT Demo Automation Test (Playwright)

This repository contains an automated Playwright test that performs the following actions on the Snipe-IT Demo
 site:

Logs into the demo application

Creates a new Macbook Pro 13" asset

Sets the asset status to “Ready to Deploy”

Checks it out to a random user

Verifies the asset was created successfully

Validates the asset details and History tab information
✅ Test Flow Overview

Login

URL: https://demo.snipeitapp.com/login

Credentials: admin / password

Create Asset

Model: Macbook Pro 13"

Status: Ready to Deploy

Checked out to: Random User

Verify Asset Creation

Confirms success message

Navigates to the newly created asset

Validates details under “History” tab

🧰 Validations Performed

Successful login by verifying dashboard

Success message upon asset creation

Asset presence in the asset list

Details and status verification on asset page

History tab entries confirmed
