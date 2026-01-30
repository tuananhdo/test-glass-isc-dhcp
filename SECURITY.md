# Security Guidelines

## Handling Secrets
This project uses a configuration file `config/glass_config.json` which may contain sensitive information (passwords, tokens).

**DO NOT COMMIT `config/glass_config.json` TO VERSION CONTROL.**

### Setup for New Users
1. Copy the example template:
   ```bash
   cp config/glass_config.example.json config/glass_config.json
   ```
2. Edit `config/glass_config.json` and set your own secure passwords.

### Docker Deployment
The `Dockerfile` is configured to ignore the local `glass_config.json` to prevent accidental leakage into the image.
- If you mount the config file (recommended):
  ```bash
  docker run -v $(pwd)/config/glass_config.json:/app/config/glass_config.json ...
  ```
- If no config is provided, the application will fallback to `glass_config.example.json` (Default credentials: `admin/CHANGE_ME`). **Change these immediately.**

## Reporting Vulnerabilities
If you discover a security vulnerability, please report it privately to the maintainers.
