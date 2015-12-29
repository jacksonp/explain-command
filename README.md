## Install

`$ sudo npm install -g explain-command`

## Use

Explain a command from your command line:

```
$ explain tar -xf file.tar.gz

tar(1)
  GNU tar is an archiving program designed to store multiple files in a single
  file (an archive), and to manipulate such archives. The archive can be either
  a regular file or a device (e.g. a tape drive, hence the name of the program,
  which stands for tape archiver), which can be located either on the local or
  on a remote machine.

  -x (-x, --extract, --get)
    Extract files from an archive. Arguments are optional. When given, they
    specify names of the archive members to be extracted.

  -f file.tar.gz (-f, --file=ARCHIVE)
    Use archive file or device ARCHIVE . If this option is not given, tar will
    first examine the environment [... truncated ...]
```

Interactive mode:

```
$ explain
Command: du -s * | sort -n | tail

du(1)
  Summarize disk usage of the set of FILEs, recursively for directories.
  Mandatory arguments to long options are mandatory for short options too.

  -s (-s, --summarize)
    display only a total for each argument

  *

-------------------------------------------------------------------------pipe--

sort(1)
  Write sorted concatenation of all FILE(s) to standard output. With no FILE,
  or when FILE is -, read standard input. Mandatory arguments to long options
  are mandatory for short options too.

  -n (-n, --numeric-sort)
    compare according to string numerical value

-------------------------------------------------------------------------pipe--

tail(1)
  Print the last 10 lines of each FILE to standard output. With more than one
  FILE, precede each with a header giving the file name. With no FILE, or when
  FILE is -, read standard input. Mandatory arguments to long options are
  mandatory for short options too.

Command: 
Bye!
```


## License

ISC
