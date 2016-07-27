# keeps the prompt lean
export PS1='$ '

# java development
export JAVA_HOME=$(/usr/libexec/java_home)
export PATH=$JAVA_HOME/bin:$PATH

# grails development
export GRAILS_HOME=/Users/faheyc2/Development/Libraries/grails-2.1.0
export PATH=$GRAILS_HOME/bin:$PATH
export H2_DB=/Users/faheyc2/Development/Libraries/grails-2.1.0/lib/com.h2database/h2/jars
export PATH=$H2_DB/bin:$PATH

# when using CNTLM behind a corporate proxy
export proxy='http://localhost:3128'
export http_proxy='http://localhost:3128'
export https_proxy='http://localhost:3128'

# for running multiple version of java
alias setJdk6='export JAVA_HOME=$(/usr/libexec/java_home -v 1.6)'
alias setJdk7='export JAVA_HOME=$(/usr/libexec/java_home -v 1.7)'
alias setJdk8='export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)'

# node development with multiple versions
# only needs to be run once so can use sublime from CLI
# from: http://olivierlacan.com/posts/launch-sublime-text-3-from-the-command-line/
# sudo ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/sublime
export NVM_DIR="/Users/faheyc2/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

# removes management/security profiles on the machine
sudo profiles -D
sudo jamf policy
