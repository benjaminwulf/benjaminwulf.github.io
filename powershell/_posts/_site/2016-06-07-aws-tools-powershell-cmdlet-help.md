yout: post
title:  AWS Tools for Windows PowerShell
date:   2016-06-07 17:48:00
teaser: A one-liner that morphed into an entire blog entry spanning everything from how
 to setup AWS Tools for Windows PowerShell via the command-line.
image:
author: benjamin_w_wulf
comments: true
shortUrl:

---

#-------------------------------------------
# AWS Tools for WindowsPowerShell
# get-help *aws* | select name,synopsis | fl
#-------------------------------------------

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>HTML TABLE</title>
</head><body>
<table>
<colgroup><col/><col/></colgroup>
<tr><th>Name</th><th>Synopsis</th></tr>
<tr><td>Add-AWSLoggingListener</td><td>Adds a listener to aws service calls and enable logging.</td></tr>
<tr><td>Clear-AWSCredentials</td><td>Clears the set of AWS credentials currently set as default in the shell or, if supplied with a name, deletes the set of credentials associated with the supplied name from the local credentials store.</td></tr>
<tr><td>Clear-AWSDefaults</td><td>Clears the persisted credentials associated with the credential profile names &#39;default&#39; and &#39;AWS PS Default&#39;, plus any credentials and region data currently set in the session&#39;s shell variables. To clear the stored default credentials only, use the -SkipShell parameter. To affect the current shell only, use the -SkipProfileStore parameter.</td></tr>
<tr><td>Clear-AWSHistory</td><td>Clears the contents of the AWS cmdlet history buffer ($AWSHistory) in the current shell.</td></tr>
<tr><td>Clear-AWSProxy</td><td>Clears AWS default proxy for the shell. Subsequent AWS cmdlet invocations will not use a proxy.</td></tr>
<tr><td>Clear-DefaultAWSRegion</td><td>Clears any default AWS region set in the shell variable $StoredAWSRegion.</td></tr>
<tr><td>Disable-AWSMetricsLogging</td><td>Disable logging of metrics data for AWS service requests.</td></tr>
<tr><td>Enable-AWSMetricsLogging</td><td>Enable logging of metrics data for AWS service requests.</td></tr>
<tr><td>Get-AWSCmdletName</td><td>Searches for cmdlets that invoke a Amazon Web Services service operation, map to an AWS CLI command, or lists all cmdlets that belong to a service identified by one or more words in its name or its cmdlet noun prefix.</td></tr>
<tr><td>Get-AWSCredentials</td><td>Returns an AWSCredentials object initialized with from either credentials currently set as default in the shell or saved and associated with the supplied name from the local credential store. Optionally the cmdlet can list the names of all sets of credentials held in the store.</td></tr>
<tr><td>Get-AWSPowerShellVersion</td><td>Displays version and copyright information for the AWS Tools for Windows PowerShell to the shell. If the ListServices switch is specifiedthe services and their API versions supported by this module are also displayed.</td></tr>
<tr><td>Get-AWSPublicIpAddressRange</td><td>Returns the public IP address range data for Amazon Web Services. Each address range instance contains the service key, host region and IP address range (in CIDR notation).</td></tr>
<tr><td>Get-AWSRegion</td><td>Returns the set of available AWS regions.</td></tr>
<tr><td>Get-DefaultAWSRegion</td><td>Returns the current default AWS region for this shell, if any, as held in the shell variable $StoredAWSRegion.</td></tr>
<tr><td>Initialize-AWSDefaults</td><td>Creates or updates the credential profile named &#39;default&#39; using supplied keys, existing credentials or profile, or EC2 metadata. The profile and a default region is then set active in the current shell.</td></tr>
<tr><td>New-AWSCredentials</td><td>Returns a populated AWSCredentials instance.</td></tr>
<tr><td>Remove-AWSLoggingListener</td><td>Removes a logger from the specified source (e.g. &#39;Amazon&#39;, or &#39;Amazon.S3&#39;) by name.</td></tr>
<tr><td>Set-AWSCredentials</td><td>Saves AWS credentials to persistent store (-StoreAs) or temporarily for the shell using shell variable $StoredAWSCredentials.Note that temporary session-based credentials cannot be saved to the persistent store.</td></tr>
<tr><td>Set-AWSHistoryConfiguration</td><td>Configures how the $AWSHistory session variable records AWS cmdlet processing.</td></tr>
<tr><td>Set-AWSProxy</td><td>Sets AWS default proxy for the shell. Subsequent AWS cmdlet invocations will use the configured proxy.</td></tr>
<tr><td>Set-AWSResponseLogging</td><td>Modify response logging options for AWS service requests.</td></tr>
<tr><td>Set-AWSSamlEndpoint</td><td>Creates or updates an endpoint settings definition for use with SAML role profiles.</td></tr>
<tr><td>Set-AWSSamlRoleProfile</td><td>Creates or updates one or more role profiles for use with authentication against a SAML-based federated identity provider to obtain temporary role-based AWS credentials.</td></tr>
<tr><td>Set-DefaultAWSRegion</td><td>Sets a default AWS region system name (e.g. us-west-2, eu-west-1 etc) into the shell variable $StoredAWSRegion.</td></tr>
</table>
</body></html>
