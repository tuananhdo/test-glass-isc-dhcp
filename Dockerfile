FROM node:20-slim

WORKDIR /app

# Install build dependencies if needed (python3, make, g++) are often included or can be added
# For dhcpd-pools, we might need some runtime libs, but node:20-slim is standard glibc.

COPY package*.json ./

RUN npm install

COPY . .

# Create dummy directories and files to satisfy glass_config.json defaults
RUN mkdir -p /var/lib/dhcp /etc/dhcp /var/log && \
    touch /var/lib/dhcp/dhcpd.leases && \
    touch /etc/dhcp/dhcpd.conf && \
    touch /var/log/dhcp.log

EXPOSE 3000

CMD ["npm", "start"]
