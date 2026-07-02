# Portfolio Backend

Express backend for the portfolio contact form.

## Setup

1. Copy `.env.example` to `.env`.
2. Set the Google SMTP values. For Gmail, use a Google app password.
3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm run dev
```

The contact endpoint is:

```text
POST /api/contact
```

Required JSON body:

```json
{
  "name": "Client Name",
  "email": "client@example.com",
  "projectType": "Shopify App",
  "message": "Project details..."
}
```

Anti-spam protections:
- JSON body limit.
- Required non-empty fields.
- Strict project type allow-list.
- Honeypot `website` field rejection.
- IP rate limit of 5 submissions per 15 minutes.
- Optional `CONTACT_ROUTE_TOKEN` header check.
