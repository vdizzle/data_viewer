# Setting up data viewer

1. Clone the repo as `git@github.com:vdizzle/data_viewer.git`
2. In the project folder, create a folder `tmp` with sub-folders `pids` and `sockets`
3. Create nginx conf file (Assuming you have already installed nginx)
    In Linux, create the nginx conf file in /etc/nginx/sites-enabled.
    Use a sammple nginx file here: https://gist.github.com/vdizzle/c47a30731893dd29513b
    Name the file /etc/nginx/sites-enabled/dat_viewer.conf or something similar.
4. Go to project path, and run the following
    1. `bundle`
    2. `foreman start`

    

