import MySQLdb
try:
    db = MySQLdb.connect(
      host="aws.connect.psdb.cloud",
      user="sdibydk6lrjnrhhi5f48",
      passwd="pscale_pw_2SstCcbCuN0jFsIsWyDbU0ONcr8ViewsdXOwfKGFZJW",
      db="bank_of_dades",
      autocommit=True,
      ssl_mode="VERIFY_IDENTITY",
      ssl={
          "ca": "/etc/ssl/certs/ca-certificates.crt"
      })

    # We reached this point means connection was successful
    print("Connection successful")
    
except MySQLdb.Error as e:
    # Failed to connect
    print(f"Failed to connect, Error: {e}")