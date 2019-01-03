# Install MongoDB Community Edition

## **1)** Update Homebrew's package database.

In a system shell, issue the following command:

```
brew update
```

## **2)** Install MongoDB.

You can install MongoDB via brew with several different options. Use one of the following operations:

**Install the MongoDB Binaries**

To install the Mongo DB binaries, issue the following command in a system shell:

```
brew install mongodb
```

**Install the Latest Development Release of MongoDB**

To install the latest development release for use in testing and development, 
issue the following command in a system shell:

```
brew install mongodb --devel
```

# Run MongoDB

## **1)** Create the data directory

Before you start MongoDB for the first time, create the directory to which the _mongod_ process will write data. 
By default, the _mongod_ process uses the **/data/db** directory. If you create a directory other than this one, 
you must specify that directory in the **dbpath** option when starting the _mongod_ process later in this procedure.

The following example command creates default **/data/db** directory:

```
sudo mkdir -p /data/db
```

## **2)** Set permissions for the data directory.

Before running _mongod_ for the first time, 
ensure that the user account running _mongod_ has read and write permissions for the directory.

```
sudo chown -R `id -un` /data/db
```

## **3)** Run MongoDB.

To run MongoDB, run the _mongod_ process at the system prompt. If necessary, 
specify the path of the _mongod_ or the data directory. See the following examples.

**Run without specifying paths**

If your system **PATH** variable includes the location of the _mongod_ binary and if you use the default data directory 
(i.e., **/data/db**), simply enter **mongod** at the system prompt:


```
mongod
```

## **4)** Verify that MongoDB has started successfuly.

Verify that MongoDB has started successfully by checking the process output for the following line:

```
[initandlisten] waiting for connections on port 27017
```

The output should be visible in the terminal or shell window.

You may see non-critical warnings in the process output. As long as you see the log line shown above, 
you can safely ignore these warnings during your initial evaluation of MongoDB.

## **5)** Begin using MongoDB.

Start a **mongo** shell on the same host machine as the _mongod_. 
You can run the **mongo** shell without any command-line options to connect to a _mongod_ that 
is running on your localhost with default port 27017:

```
mongo
```


