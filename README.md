   # Setting up data viewer

1. Clone the repo as `git clone git@github.com:vdizzle/data_viewer.git`
2. Switch to `develop` branch as `git checkout develop`
2. In the project folder, create a folder `tmp` with sub-folders `pids` and `sockets`
3. Create nginx conf file (Assuming you have already installed nginx)
    In Linux, create the nginx conf file in /etc/nginx/sites-enabled.
    Use a sammple nginx file here: https://gist.github.com/vdizzle/c47a30731893dd29513b
    Name the file /etc/nginx/sites-enabled/dat_viewer.conf or something similar.
4. Set the following ENV variables as:
    1. `export DATA_STORE_API_URL=your_api_instance_url`
    2. `export DATA_STORE_API_KEY=your_api_key`
5. Ensure that your environment has nodejs installed. If you are running ubuntu, here's how you can do it:
    1. `sudo apt-get update`
    2. `sudo apt-get install nodejs`
    3. `sudo apt-get install npm`
    4. `sudo apt-get install libnotify-bin`
    5. `sudo npm install --global gulp`
    6. `sudo npm install --global notify-send`
    7. `npm install`
6. Go to project path, and run the following
    1. `bundle`
    2. `gulp`
    3. `foreman start`
