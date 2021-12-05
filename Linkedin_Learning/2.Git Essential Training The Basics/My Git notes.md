## Linkedin Learning

# Git Essential Training: The Basics

__________________________________

## 1.What is Git?

### 1.1.Version Control
- Keeps track of changes
	- Especially text changes
	- Version 1, version 2, version 3
- Version Control System (VCS)
- Source Code Management (SCM)

Other Examples of Version Control
- File naming
- Microsoft Word: Track Changes
- Adobe Photoshop: History
- Wikis
- Undo: Ctrl+Z (Windows), Cmd-Z (Mac)

### 1.2.The history behind Git

Source Code Control System (SCCS)
- 1972: closed source, free with Unix
- Stored original version and sets of changes

Revision Control System (RCS)
- 1982: open source
- Stored latest version and sets of changes

Concurrent Versions Systems (CVS)
- 1986-1990: open source
- Multiple files, entire project
- Multi-user repositories 

Apache Subversion (SVN)
- 2000: open source
- Track text and images
- Track file changes collectively

BitKeeper SCM 
- 2000: closed source, proprietary
- Distributed version control 
- "Community" version was free
- Used for source code of the Linux kernel from 2002 to 2005
- Controversial to use proprietary SCM for an open-source project
- April 2005: the "community" version was not free anymore

Git is born
- April 2005
- Created by Linus Torvalds
- Replacement for BitKeeper to manage Linux kernel source code
- Distributed version control
- Open-source and free software
- Compatible with Linux, macOS, and Windows 
- Faster than other SCMs (100 times in some cases)
- Better safeguards against data corruption

___________________________________________

## 4. Git Concepts and Architecture

### 4.1.The three trees

- repository
- staging index
- work

### 4.2.Git workflows

1. Create new or edit existing files
2. Stage the files
3. Commit the files

### 4.3.Hash values (SHA-1)

- Git generates a checksum for each change set
- Checksum algorithms convert data into a simple number
- Same data always equals same checksum
- Data integrity is fundamental 
- Changing data would change checksum
- Git uses SHA-1 hash algorithm to create checksums
- 40-character hexadecimal string (0-9, a-f)
- Example: 5c15e8bd540c113cd2d9eac6f64cacbc5ff6fe9c

### 4.4.The HEAD pointer

HEAD 
- Pointer to tip of current branch in repository
- Last state of repository, what was last checked out 
- Points to parent of next commit where writing commits takes place



 

