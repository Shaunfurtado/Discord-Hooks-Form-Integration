# Discord Hooks Form Integration

This repository provides a way to use Discord hooks to integrate forms into your static websites. The example included demonstrates how to create a contact form that sends submissions directly to a Discord channel using webhooks.

Demo Link : [Link](https://shaunfurtado.is-a.dev/Discord-Hooks-Form-Integration/)

`Note` : Demo is Hosted on Github Pages.

## Files

- `form.tsx`: Contains the Next.js component for the contact form with Tailwind CSS.
- `index.html`: The main HTML file for the static website.

## Getting Started

### Prerequisites

- A Discord server with webhook permissions.

### Usage

1. Create a webhook in your Discord server:
    - Go to your server settings.
    - Navigate to the "Integrations" tab.
    - Create a new webhook and copy the webhook URL.

2. Update the webhook URL in the `ContactForm` component in `form.tsx`:
    ```tsx
    const webhookUrl = "YOUR_DISCORD_WEBHOOK_URL";
    ```

3. Open `index.html` in your browser to see the form in action.

### Deployment

To deploy your static website, simply upload the `index.html`.

## Contributing

Feel free to submit issues and pull requests to improve the project.

## License

This project is licensed under the MIT License.