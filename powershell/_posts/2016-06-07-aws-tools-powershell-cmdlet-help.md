---

layout: post
title:  AWS Tools for Windows PowerShell
date:   2016-06-07 17:48:00
teaser: A one-liner that morphed into an entire blog entry spanning everything from how
 to setup AWS Tools for Windows PowerShell via the command-line.
image:
author: benjamin_w_wulf
comments: true
shortUrl:

---

AWS Tools for WindowsPowerShell
===============================
```
Get-Help *aws* | Select-Object name,synopsis | fl
```

```
Get-Help *aws* | Select-Object name,synopsis | ConvertTo-HTML | Out-File $Path
```

<html>
<head>
<title>AWS Tools for WindowsPowerShell</title>
</head><body>
<table>
<colgroup><col/><col/></colgroup>
<tr><th>Name</th><th>Synopsis</th></tr>
<tr><td><a href="#psAdd-AWSLoggingListener">Add-AWSLoggingListener</a></td><td>Adds a listener to aws service calls and enable logging.</td></tr>
<tr><td><a href="#psClear-AWSCredentials">Clear-AWSCredentials</a></td><td>Clears the set of AWS credentials currently set as default in the shell or, if supplied with a name, deletes the set of credentials associated with the supplied name from the local credentials store.</td></tr>
<tr><td><a href="#psClear-AWSDefaults">Clear-AWSDefaults</a></td><td>Clears the persisted credentials associated with the credential profile names &#39;default&#39; and &#39;AWS PS Default&#39;, plus any credentials and region data currently set in the session&#39;s shell variables. To clear the stored default credentials only, use the -SkipShell parameter. To affect the current shell only, use the -SkipProfileStore parameter.</td></tr>
<tr><td><a href="#psClear-AWSHistory">Clear-AWSHistory</a></td><td>Clears the contents of the AWS cmdlet history buffer ($AWSHistory) in the current shell.</td></tr>
<tr><td><a href="#psClear-AWSProxy">Clear-AWSProxy</a></td><td>Clears AWS default proxy for the shell. Subsequent AWS cmdlet invocations will not use a proxy.</td></tr>
<tr><td><a href="#psClear-DefaultAWSRegion">Clear-DefaultAWSRegion</a></td><td>Clears any default AWS region set in the shell variable $StoredAWSRegion.</td></tr>
<tr><td><a href="#psDisable-AWSMetricsLogging">Disable-AWSMetricsLogging</a></td><td>Disable logging of metrics data for AWS service requests.</td></tr>
<tr><td><a href="#psEnable-AWSMetricsLogging">Enable-AWSMetricsLogging</a></td><td>Enable logging of metrics data for AWS service requests.</td></tr>
<tr><td><a href="#psGet-AWSCmdletName">Get-AWSCmdletName</a></td><td>Searches for cmdlets that invoke a Amazon Web Services service operation, map to an AWS CLI command, or lists all cmdlets that belong to a service identified by one or more words in its name or its cmdlet noun prefix.</td></tr>
<tr><td><a href="#psGet-AWSCredentials">Get-AWSCredentials</a></td><td>Returns an AWSCredentials object initialized with from either credentials currently set as default in the shell or saved and associated with the supplied name from the local credential store. Optionally the cmdlet can list the names of all sets of credentials held in the store.</td></tr>
<tr><td><a href="#psGet-AWSPowerShellVersion">Get-AWSPowerShellVersion</a></td><td>Displays version and copyright information for the AWS Tools for Windows PowerShell to the shell. If the ListServices switch is specifiedthe services and their API versions supported by this module are also displayed.</td></tr>
<tr><td><a href="#psGet-AWSPublicIpAddressRange">Get-AWSPublicIpAddressRange</a></td><td>Returns the public IP address range data for Amazon Web Services. Each address range instance contains the service key, host region and IP address range (in CIDR notation).</td></tr>
<tr><td><a href="#psGet-AWSRegion">Get-AWSRegion</a></td><td>Returns the set of available AWS regions.</td></tr>
<tr><td><a href="#psGet-DefaultAWSRegion">Get-DefaultAWSRegion</a></td><td>Returns the current default AWS region for this shell, if any, as held in the shell variable $StoredAWSRegion.</td></tr>
<tr><td><a href="#psInitialize-AWSDefaults">Initialize-AWSDefaults</a></td><td>Creates or updates the credential profile named &#39;default&#39; using supplied keys, existing credentials or profile, or EC2 metadata. The profile and a default region is then set active in the current shell.</td></tr>
<tr><td><a href="#psNew-AWSCredentials">New-AWSCredentials</a></td><td>Returns a populated AWSCredentials instance.</td></tr>
<tr><td><a href="#psRemove-AWSLoggingListener">Remove-AWSLoggingListener</a></td><td>Removes a logger from the specified source (e.g. &#39;Amazon&#39;, or &#39;Amazon.S3&#39;) by name.</td></tr>
<tr><td><a href="#psSet-AWSCredentials">Set-AWSCredentials</a></td><td>Saves AWS credentials to persistent store (-StoreAs) or temporarily for the shell using shell variable $StoredAWSCredentials.Note that temporary session-based credentials cannot be saved to the persistent store.</td></tr>
<tr><td><a href="#psSet-AWSHistoryConfiguration">Set-AWSHistoryConfiguration</a></td><td>Configures how the $AWSHistory session variable records AWS cmdlet processing.</td></tr>
<tr><td><a href="#psSet-AWSProxy">Set-AWSProxy</a></td><td>Sets AWS default proxy for the shell. Subsequent AWS cmdlet invocations will use the configured proxy.</td></tr>
<tr><td><a href="#psSet-AWSResponseLogging">Set-AWSResponseLogging</a></td><td>Modify response logging options for AWS service requests.</td></tr>
<tr><td><a href="#psSet-AWSSamlEndpoint">Set-AWSSamlEndpoint</a></td><td>Creates or updates an endpoint settings definition for use with SAML role profiles.</td></tr>
<tr><td><a href="#psSet-AWSSamlRoleProfile">Set-AWSSamlRoleProfile</a></td><td>Creates or updates one or more role profiles for use with authentication against a SAML-based federated identity provider to obtain temporary role-based AWS credentials.</td></tr>
<tr><td><a href="#psSet-DefaultAWSRegion">Set-DefaultAWSRegion</a></td><td>Sets a default AWS region system name (e.g. us-west-2, eu-west-1 etc) into the shell variable $StoredAWSRegion.</td></tr>
</table>
</body></html>

<a name="psAdd-AWSLoggingListener">

NAME
    Add-AWSLoggingListener
    
SYNOPSIS
    Adds a listener to aws service calls and enable logging.
    
SYNTAX
    Add-AWSLoggingListener [-Name] <System.String> [-TraceListener] <System.Diagnostics.TraceListener> [-LogFilePath] 
    <System.String> [-Source <System.String>] [<CommonParameters>]
    
    
DESCRIPTION
    Adds a single trace listener to the specified trace source. Given a name and file path,  creates a 
    TextWriterTraceListener with the given name and file path, and adds it to the  listeners for the trace source. 
    If Source is not specified, 'Amazon' is assumed, which represents all SDK API calls.  In the case where there are 
    multiple listeners for multiple sources, Trace calls for an API will go to the most specific source only. For 
    example, if one listener is added to 'Amazon.S3' and another on 'Amazon', then S3 calls will only be logged to the 
    former listener.
    

PARAMETERS
    -LogFilePath <System.String>
        File path to write the log to.
        
        Required?                    true
        Position?                    2
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -Name <System.String>
        The name of the logger.
        
        Required?                    true
        Position?                    1
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -Source <System.String>
        Specify a source to log responses for. 
        Defaults to all responses (i.e. 'Amazon'). To limit to a specific service (for example DynamoDB), use 
        'Amazon.DynamoDB'.)
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -TraceListener <System.Diagnostics.TraceListener>
        Specify a custom trace listener object.
        
        Required?                    true
        Position?                    1
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    None
        
     
        This cmdlet does not produce any output.
    
    
    -------------------------- EXAMPLE 1 --------------------------
    
    PS C:\>Add-AWSLoggingListener -Name MyAWSLogs -LogFilePath c:\logs\aws.txt
    
    
    Description
    
    -----------
    
    Attaches a listener for the source 'Amazon', matching responses from all services for the current script or shell. 
    Log output will be written to the specified file (the folder path must exist). Multiple listeners for different 
    namespaces can be active at a time. By default only error responses are logged.
    
    
    
    -------------------------- EXAMPLE 2 --------------------------
    
    PS C:\>Add-AWSLoggingListener -Name MyS3Logs -LogFilePath c:\logs\s3.txt -Source Amazon.S3
    
    
    Description
    
    -----------
    
    Attaches a listener for the source 'Amazon.S3'. Responses matching only this namespace will be logged to the 
    specified file (the folder path must exist). Multiple listeners for different namespaces can be active at a time. 
    By default only error responses are logged.
    
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Add-AWSLoggingListener.html&
    tocid=Add-AWSLoggingListener
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psClear-AWSCredentials">
NAME
    Clear-AWSCredentials
    
SYNOPSIS
    Clears the set of AWS credentials currently set as default in the shell or, if supplied with a name, deletes the 
    set of credentials associated with the supplied name from the local credentials store.
    
SYNTAX
    Clear-AWSCredentials [-ProfileName <System.String>] [<CommonParameters>]
    
    
DESCRIPTION
    Clears the set of AWS credentials currently set as default in the shell or, if supplied with a name, deletes the 
    set of credentials associated with the supplied name from the local credentials store.
    

PARAMETERS
    -ProfileName <System.String>
        The name associated with a set of credentials in the local store that are to be deleted. If not specified, the 
        default credentials in the shell are cleared.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    None
        
     
        This cmdlet does not generate any output.
    
    
    -------------------------- EXAMPLE 1 --------------------------
    
    PS C:\>Clear-AWSCredentials
    
    
    Description
    
    -----------
    
    Clears any credentials set as default in the current shell. The stored profiles are not affected.
    
    
    
    -------------------------- EXAMPLE 2 --------------------------
    
    PS C:\>Clear-AWSCredentials -ProfileName myCredentials
    
    
    Description
    
    -----------
    
    Deletes the credential profile named 'myCredentials'.
    
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Clear-AWSCredentials.html&to
    cid=Clear-AWSCredentials
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psClear-AWSDefaults">
NAME
    Clear-AWSDefaults
    
SYNOPSIS
    Clears the persisted credentials associated with the credential profile names 'default' and 'AWS PS Default', plus 
    any credentials and region data currently set in the session's shell variables. To clear the stored default 
    credentials only, use the -SkipShell parameter. To affect the current shell only, use the -SkipProfileStore 
    parameter.
    
SYNTAX
    Clear-AWSDefaults [-SkipShell <System.Management.Automation.SwitchParameter>] [-SkipProfileStore 
    <System.Management.Automation.SwitchParameter>] [<CommonParameters>]
    
    
DESCRIPTION
    Clears the persisted credentials associated with the credential profile names 'default' and 'AWS PS Default', plus 
    any credentials and region data currently set in the session's shell variables. To clear the stored default 
    credentials only, use the -SkipShell parameter. To affect the current shell only, use the -SkipProfileStore 
    parameter.
    

PARAMETERS
    -SkipProfileStore <System.Management.Automation.SwitchParameter>
        If set, the cmdlet will not clear the 'default' and 'AWS PS Default' profiles held in the credentials store.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -SkipShell <System.Management.Automation.SwitchParameter>
        If set, the cmdlet will not clear the current shell state.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    None
        
     
        This cmdlet does not generate any output.
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Clear-AWSDefaults.html&tocid
    =Clear-AWSDefaults
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psClear-AWSHistory">
NAME
    Clear-AWSHistory
    
SYNOPSIS
    Clears the contents of the AWS cmdlet history buffer ($AWSHistory) in the current shell.
    
SYNTAX
    Clear-AWSHistory [<CommonParameters>]
    
    
DESCRIPTION
    Clears the contents of the AWS cmdlet history buffer ($AWSHistory) in the current shell.
    

PARAMETERS
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    None
        
     
        This cmdlet does not generate any output.
    
    
    
RELATED LINKS
    Online version: 
    http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Clear-AWSHistory.html&tocid=Clear-AWSHistory
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psClear-AWSProxy">
NAME
    Clear-AWSProxy
    
SYNOPSIS
    Clears AWS default proxy for the shell. Subsequent AWS cmdlet invocations will not use a proxy.
    
SYNTAX
    Clear-AWSProxy [<CommonParameters>]
    
    
DESCRIPTION
    Clears AWS default proxy for the shell.
    

PARAMETERS
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    None
        
     
        This cmdlet does not generate any output.
    
    
    -------------------------- EXAMPLE 1 --------------------------
    
    PS C:\>Clear-AWSProxy
    
    
    Description
    
    -----------
    
    This command removes proxy configuration from the current shell. Subsequent cmdlets invocations will not use a 
    proxy.
    
    
    
    
RELATED LINKS
    Online version: 
    http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Clear-AWSProxy.html&tocid=Clear-AWSProxy
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psClear-DefaultAWSRegion">
NAME
    Clear-DefaultAWSRegion
    
SYNOPSIS
    Clears any default AWS region set in the shell variable $StoredAWSRegion.
    
SYNTAX
    Clear-DefaultAWSRegion [<CommonParameters>]
    
    
DESCRIPTION
    Clears any default AWS region set in the shell variable $StoredAWSRegion.
    

PARAMETERS
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    None
        
     
        This cmdlet does not generate any output.
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Clear-DefaultAWSRegion.html&
    tocid=Clear-DefaultAWSRegion
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psDisable-AWSMetricsLogging">
NAME
    Disable-AWSMetricsLogging
    
SYNOPSIS
    Disable logging of metrics data for AWS service requests.
    
SYNTAX
    Disable-AWSMetricsLogging [<CommonParameters>]
    
    
DESCRIPTION
    Amazon.PowerShell.Common.DisableMetricsLoggingCmdlet
    

PARAMETERS
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    None
        
     
        This cmdlet does not produce any output.
    
    
    -------------------------- EXAMPLE 1 --------------------------
    
    PS C:\>Disable-AWSMetricsLogging
    
    
    Description
    
    -----------
    
    Turns off logging of performance metrics for service calls.
    
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Disable-AWSMetricsLogging.ht
    ml&tocid=Disable-AWSMetricsLogging
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psEnable-AWSMetricsLogging">
NAME
    Enable-AWSMetricsLogging
    
SYNOPSIS
    Enable logging of metrics data for AWS service requests.
    
SYNTAX
    Enable-AWSMetricsLogging [<CommonParameters>]
    
    
DESCRIPTION
    Amazon.PowerShell.Common.EnableMetricsLoggingCmdlet
    

PARAMETERS
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    None
        
     
        This cmdlet does not produce any output.
    
    
    -------------------------- EXAMPLE 1 --------------------------
    
    PS C:\>Enable-AWSMetricsLogging
    
    
    Description
    
    -----------
    
    Turns on logging of performance metrics for service calls.
    
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Enable-AWSMetricsLogging.htm
    l&tocid=Enable-AWSMetricsLogging
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psGet-AWSCmdletName">
NAME
    Get-AWSCmdletName
    
SYNOPSIS
    Searches for cmdlets that invoke a Amazon Web Services service operation, map to an AWS CLI command, or lists all 
    cmdlets that belong to a service identified by one or more words in its name or its cmdlet noun prefix.
    
SYNTAX
    Get-AWSCmdletName [[-ApiOperation] <System.String>] [-MatchWithRegex 
    <System.Management.Automation.SwitchParameter>] [-Service <System.String>] -AwsCliCommand <System.String> 
    [<CommonParameters>]
    
    
DESCRIPTION
    Returns the name of the cmdlet that invokes a named Amazon Web Services service operation, optionally restricting 
    the scope of the search to a specific service which can be identified using one or more words from the service 
    name or the prefix applied to the nouns of cmdlets belonging to the service. 
    Returns the names and corresponding service operations for a specific Amazon Web Services service which can be 
    identified using one or more words from the service name or the  prefix applied to the nouns of cmdlets belonging 
    to the service. 
    Returns the name of the cmdlet that is the equivalent to an AWS CLI command. In this mode a best-effort is made to 
    extract the service and operation name data from the CLI command using known naming conventions and position rules 
    used by the AWS CLI. 
    If no match is made, no data is output. If the service cannot be identified, an error is displayed.
    

PARAMETERS
    -ApiOperation <System.String>
        The name of the service operation (api) to search for. If not further restricted by service prefix or service 
        name, all cmdlets across all services are inspected for a matching operation. 
        By default the value supplied for this parameter is treated as a simple whole-word pattern  to match. If the 
        -MatchWithRegex switch is set the value is used as a regular expression. In both cases the search is 
        case-insensitive/invariant culture.
        
        Required?                    false
        Position?                    1
        Default value                None
        Accept pipeline input?       True (ByValue, )
        Accept wildcard characters?  false
        
    -AwsCliCommand <System.String>
        The AWS CLI command to match. For example 'aws ec2 describe-instances'.  
        The cmdlet will make a best-effort to identify the owning service and the operation  name by parsing the 
        command using known conventions for the AWS CLI command format. The 'aws' prefix may be omitted and any AWS 
        CLI options (identified by the prefix characters --) are skipped when parsing the value to identify the 
        service code and operation name elements.
        
        Required?                    true
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -MatchWithRegex <System.Management.Automation.SwitchParameter>
        If set, the value supplied for the ApiOperation parameter is assumed to be a regular expression. By default, 
        the value supplied for ApiOperation is treated as a simple case-insensitive whole-word pattern to match (the 
        cmdlet will surround the ApiOperation value with ^ and $ tokens automatically). If the switch is set no 
        modification of the supplied value is performed.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -Service <System.String>
        Restricts the search to the cmdlets belonging to services that match the full or  partial term supplied to the 
        parameter value, which can be the service prefix (for example 'EC2') or one or more terms from the service 
        name (for example 'compute' or 'compute cloud'). 
        When partial names are used (as opposed to a prefix code) all services  for which a match can be found are 
        used to assist in the cmdlet results. A  regular expression can always be supplied for the parameter value. 
        If this is the only parameter supplied to the cmdlet, the output will list all of the cmdlets belonging to the 
        services matching the search term, together  with the corresponding service operation names.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    PSObject
        
     
        A collection of zero or more objects listing cmdlets that implement the specified operation, map to the AWS 
        CLI command or belong to the specified service.
    
    
    -------------------------- EXAMPLE 1 --------------------------
    
    PS C:\>Get-AWSCmdletName -ApiOperation describeinstances
    
    CmdletName            ServiceOperation        ServiceName                            CmdletNounPrefix
    ----------            ----------------        -----------                            ----------------
    Get-EC2Instance       DescribeInstances       Amazon Elastic Compute Cloud           EC2
    Get-OPSInstances      DescribeInstances       AWS OpsWorks                           OPS
    
    
    Description
    
    -----------
    
    Returns the names of the all cmdlets that invoke an API matching the term 'describeinstances' across all services. 
    In this example, 'Get-EC2Instance' from Amazon EC2 and Get-OPSInstances from Amazon OpsWorks are output.
    
    
    
    -------------------------- EXAMPLE 2 --------------------------
    
    PS C:\>Get-AWSCmdletName -ApiOperation describeinstances -Service ec2
    
    CmdletName            ServiceOperation        ServiceName                            CmdletNounPrefix
    ----------            ----------------        -----------                            ----------------
    Get-EC2Instance       DescribeInstances       Amazon Elastic Compute Cloud           EC2
    
    
    Description
    
    -----------
    
    Returns the names of the all cmdlets that invoke an API matching the term 'describeinstances' for the Amazon EC2 
    service.In this example, 'Get-EC2Instance' is output.
    
    
    
    -------------------------- EXAMPLE 3 --------------------------
    
    PS C:\>Get-AWSCmdletName -ApiOperation describeinstances -Service "compute cloud"
    
    CmdletName            ServiceOperation        ServiceName                            CmdletNounPrefix
    ----------            ----------------        -----------                            ----------------
    Get-EC2Instance       DescribeInstances       Amazon Elastic Compute Cloud           EC2
    
    
    Description
    
    -----------
    
    Returns the names of the all cmdlets that invoke an API matching the term 'describeinstances' for the Amazon EC2 
    service.In this example, 'Get-EC2Instance' is output.
    
    
    
    -------------------------- EXAMPLE 4 --------------------------
    
    PS C:\>Get-AWSCmdletName -ApiOperation securitygroup -MatchWithRegex
    
    CmdletName                              ServiceOperation                        ServiceName                        
        CmdletNounPrefix
    ----------                              ----------------                        -----------                        
        ----------------
    Approve-ECCacheSecurityGroupIngress     AuthorizeCacheSecurityGroupIngress      Amazon ElastiCache                 
        EC
    Get-ECCacheSecurityGroup                DescribeCacheSecurityGroups             Amazon ElastiCache                 
        EC
    ...
    Get-EC2SecurityGroup                    DescribeSecurityGroups                  Amazon Elastic Compute Cloud       
        EC2
    Grant-EC2SecurityGroupEgress            AuthorizeSecurityGroupEgress            Amazon Elastic Compute Cloud       
        EC2
    Grant-EC2SecurityGroupIngress           AuthorizeSecurityGroupIngress           Amazon Elastic Compute Cloud       
        EC2
    ...
    New-RDSDBSecurityGroup                  CreateDBSecurityGroup                   Amazon Relational Database Service 
        RDS
    Remove-RDSDBSecurityGroup               DeleteDBSecurityGroup                   Amazon Relational Database Service 
        RDS
    Revoke-RDSDBSecurityGroupIngress        RevokeDBSecurityGroupIngress            Amazon Relational Database Service 
        RDS
    ...
    Approve-RSClusterSecurityGroupIngress   AuthorizeClusterSecurityGroupIngress    Amazon Redshift                    
        RS
    Get-RSClusterSecurityGroups             DescribeClusterSecurityGroups           Amazon Redshift                    
        RS
    
    
    Description
    
    -----------
    
    Returns the names of the all cmdlets that contain the term 'securitygroup' in the operation they invoke, across 
    all services.
    
    
    
    -------------------------- EXAMPLE 5 --------------------------
    
    PS C:\>Get-AWSCmdletName -ApiOperation securitygroup -MatchWithRegex -Service ec2
    
    CmdletName                          ServiceOperation                        ServiceName                            
    CmdletNounPrefix
    ----------                          ----------------                        -----------                            
    ----------------
    Get-EC2SecurityGroup                DescribeSecurityGroups                  Amazon Elastic Compute Cloud           
    EC2
    Grant-EC2SecurityGroupEgress        AuthorizeSecurityGroupEgress            Amazon Elastic Compute Cloud           
    EC2
    Grant-EC2SecurityGroupIngress       AuthorizeSecurityGroupIngress           Amazon Elastic Compute Cloud           
    EC2
    ...
    
    
    Description
    
    -----------
    
    Returns the names of the all Amazon EC2 cmdlets that contain the term 'securitygroup' in the operation they invoke.
    
    
    
    -------------------------- EXAMPLE 6 --------------------------
    
    PS C:\>Get-AWSCmdletName -ApiOperation listmetrics -Service cloudwatch
    
    CmdletName              ServiceOperation        ServiceName            CmdletNounPrefix
    ----------              ----------------        -----------            ----------------
    Get-CWMetrics           ListMetrics             Amazon CloudWatch      CW
    
    
    Description
    
    -----------
    
    Returns the name of the cmdlet that invokes the Amazon CloudWatch 'ListMetrics' operation. In this example, 
    'Get-CWMetrics' is output. The same result can be obtained by using the service prefix, 'cw' as the value for the 
    -Service parameter.
    
    
    
    -------------------------- EXAMPLE 7 --------------------------
    
    PS C:\>Get-AWSCmdletName -AwsCliCommand "aws ec2 describe-images"
    
    CmdletName              ServiceOperation        ServiceName                            CmdletNounPrefix
    ----------              ----------------        -----------                            ----------------
    Get-EC2Image            DescribeImages          Amazon Elastic Compute Cloud           EC2
    
    
    Description
    
    -----------
    
    Returns the name of the cmdlet that performs the same operation as the specified AWS CLI command. In this example, 
    'Get-EC2Image' is output. Any options (prefixed by --) in the AWS CLI command are ignored. The initial 'aws' can 
    also be omitted. This format is useful when transcoding an AWS CLI sample to AWS PowerShell.
    
    
    
    -------------------------- EXAMPLE 8 --------------------------
    
    PS C:\> Get-AWSCmdletName -Service ec2
    
    CmdletName                            ServiceOperation                       ServiceName
    ----------                            ----------------                       -----------
    Add-EC2ClassicLinkVpc                 AttachClassicLinkVpc                   Amazon Elastic Compute Cloud
    Add-EC2InternetGateway                AttachInternetGateway                  Amazon Elastic Compute Cloud
    Add-EC2NetworkInterface               AttachNetworkInterface                 Amazon Elastic Compute Cloud
    ...
    Get-ECSClusterDetail                  DescribeClusters                       Amazon EC2 Container Service
    Get-ECSClusters                       ListClusters                           Amazon EC2 Container Service
    Get-ECSClusterService                 ListServices                           Amazon EC2 Container Service
    ...
    
    
    Description
    
    -----------
    
    Performs a search to list all cmdlets that have 'ec2' in either the service name or the cmdlet noun prefix. In 
    this example this matches Amazon Elastic Compute Cloud (search term matches noun prefix) and Amazon EC2 Container 
    Service (search term found in the name).
    
    
    
    -------------------------- EXAMPLE 9 --------------------------
    
    PS C:\> Get-AWSCmdletName -Service compute
    
    CmdletName                            ServiceOperation                       ServiceName
    ----------                            ----------------                       -----------
    Add-EC2ClassicLinkVpc                 AttachClassicLinkVpc                   Amazon Elastic Compute Cloud
    Add-EC2InternetGateway                AttachInternetGateway                  Amazon Elastic Compute Cloud
    Add-EC2NetworkInterface               AttachNetworkInterface                 Amazon Elastic Compute Cloud
    ...
    Unregister-EC2Image                   DeregisterImage                        Amazon Elastic Compute Cloud
    Unregister-EC2PrivateIpAddress        UnassignPrivateIpAddresses             Amazon Elastic Compute Cloud
    Unregister-EC2RouteTable              DisassociateRouteTable                 Amazon Elastic Compute Cloud
    
    
    Description
    
    -----------
    
    Performs a search to list all cmdlets that have 'compute' in either the service name or the cmdlet noun prefix. In 
    this example the match is for Amazon Elastic Compute Cloud only (search term found in the name).
    
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Get-AWSCmdletName.html&tocid
    =Get-AWSCmdletName
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psGet-AWSCredentials">
NAME
    Get-AWSCredentials
    
SYNOPSIS
    Returns an AWSCredentials object initialized with from either credentials currently set as default in the shell or 
    saved and associated with the supplied name from the local credential store. Optionally the cmdlet can list the 
    names of all sets of credentials held in the store.
    
SYNTAX
    Get-AWSCredentials [[-ProfileName] <System.String>] [[-ListProfiles] 
    <System.Management.Automation.SwitchParameter>] [<CommonParameters>]
    
    
DESCRIPTION
    Returns an AWSCredentials object initialized with from either credentials currently set as default in the shell or 
    saved and associated with the supplied name from the local credential store. Optionally the cmdlet can list the 
    names of all sets of credentials held in the store.
    

PARAMETERS
    -ListProfiles <System.Management.Automation.SwitchParameter>
        Lists the names of all credentials data sets saved in local storage
        
        Required?                    false
        Position?                    3
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -ProfileName <System.String>
        The name associated with the credentials in local storage
        
        Required?                    false
        Position?                    2
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    Amazon.Runtime.AWSCredentials
        
     
        Object containing a set of AWS credentials.
    
    String
        
     
        The set of names associated with saved credentials in the local store.
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Get-AWSCredentials.html&toci
    d=Get-AWSCredentials
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psGet-AWSPowerShellVersion">
NAME
    Get-AWSPowerShellVersion
    
SYNOPSIS
    Displays version and copyright information for the AWS Tools for Windows PowerShell to the shell. If the 
    ListServices switch is specifiedthe services and their API versions supported by this module are also displayed.
    
SYNTAX
    Get-AWSPowerShellVersion [-ListServiceVersionInfo <System.Management.Automation.SwitchParameter>] 
    [<CommonParameters>]
    
    
DESCRIPTION
    Writes version and copyright information for the AWSPowerShell integration to the shell. If the ListServices 
    switch is specified the services and their API versions supported by this module are also displayed.
    

PARAMETERS
    -ListServiceVersionInfo <System.Management.Automation.SwitchParameter>
        If specified the cmdlet also lists all supported AWS services and their versions.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    String
        
     
        Version information for the tools and optionally supported services.
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Get-AWSPowerShellVersion.htm
    l&tocid=Get-AWSPowerShellVersion
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psGet-AWSPublicIpAddressRange">
NAME
    Get-AWSPublicIpAddressRange
    
SYNOPSIS
    Returns the public IP address range data for Amazon Web Services. Each address range instance contains the service 
    key, host region and IP address range (in CIDR notation).
    
SYNTAX
    Get-AWSPublicIpAddressRange -OutputServiceKeys <System.Management.Automation.SwitchParameter> 
    -OutputPublicationDate <System.Management.Automation.SwitchParameter> [-ServiceKey <System.String[]>] [-Region 
    <System.String[]>] [<CommonParameters>]
    
    
DESCRIPTION
    Returns the collection of current public IP address ranges for Amazon Web Services. Each address  range instance 
    contains the service key, host region and IP address range (in CIDR notation). 
    The cmdlet can optionally emit the set of currently known service keys, perform filtering of  output by service 
    key or region information or output the publication date and time of the current information. 
    The information processed by this cmdlet is contained in a publicly accessible JSON-format file at 
    https://ip-ranges.amazonaws.com/ip-ranges.json. The information in this file is generated from our internal  
    system-of-record and is authoritative. You can expect it to change several times per week and should poll  
    accordingly 
    For more details on the public IP address range data for Amazon Web Services,  see 
    http://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html.
    

PARAMETERS
    -OutputPublicationDate <System.Management.Automation.SwitchParameter>
        If set the cmdlet emits the publication date and time of the data.
        
        Required?                    true
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -OutputServiceKeys <System.Management.Automation.SwitchParameter>
        If set the cmdlet emits the collection of currently-known service keys used in the address range data.
        
        Required?                    true
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -Region <System.String[]>
        If set, contains one or more region identifiers (e.g. "us-east-1", "global") to filter the output to. This 
        parameter can be used in conjunction with the ServiceKey parameter to filter by region and service key.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -ServiceKey <System.String[]>
        If set, contains one or more service keys to filter the output to. This parameter can be used in conjunction 
        with the Region parameter to filter by region and service key.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    AWSPublicIpAddressRange
        
     
        A collection of AWSPublicIpAddressRange instances. This is the default output from the cmdlet.
    
    String[]
        
     
        A collection of currently-known service keys used in the address data, if the -OutputServiceKeys switch is set.
    
    DateTime
        
     
        The publication date and time if the -OutputPublicationDate switch is set.
    
    
    -------------------------- EXAMPLE 1 --------------------------
    
    PS C:\>Get-AWSPublicIpAddressRange
    
    IpPrefix                Region                Service
    --------                ------                -------
    50.19.0.0/16            us-east-1             AMAZON
    54.239.98.0/24          us-east-1             AMAZON
    ...
    50.19.0.0/16            us-east-1             EC2
    75.101.128.0/17         us-east-1             EC2
    ...
    205.251.192.0/21        GLOBAL                ROUTE53
    54.232.40.64/26         sa-east-1             ROUTE53_HEALTHCHECKS
    ...
    54.239.192.0/19         GLOBAL                CLOUDFRONT
    204.246.176.0/20        GLOBAL                CLOUDFRONT
    ...
    
    
    Description
    
    -----------
    
    Outputs all of the current IP address range objects to the pipeline.
    
    
    
    -------------------------- EXAMPLE 2 --------------------------
    
    PS C:\>Get-AWSPublicIpAddressRange -OutputServiceKeys
    
    AMAZON
    EC2
    ROUTE53
    ROUTE53_HEALTHCHECKS
    CLOUDFRONT
    
    
    Description
    
    -----------
    
    Outputs the currently used set of 'Service' keys to the pipeline.
    
    
    
    -------------------------- EXAMPLE 3 --------------------------
    
    PS C:\>Get-AWSPublicIpAddressRange -OutputPublicationDate
    
    Monday, December 15, 2014 4:41:01 PM
    
    
    Description
    
    -----------
    
    Outputs the publication date of the IP address range information.
    
    
    
    -------------------------- EXAMPLE 4 --------------------------
    
    PS C:\>Get-AWSPublicIpAddressRange -ServiceKey ec2
    
    
    Description
    
    -----------
    
    Filters the IP address ranges to output only those with a 'Service' value of 'EC2' to the pipeline.
    
    
    
    -------------------------- EXAMPLE 5 --------------------------
    
    PS C:\>Get-AWSPublicIpAddressRange -Region us-west-2
    
    
    Description
    
    -----------
    
    Filters the IP address ranges to output only those used in the US West (Oregon) region to the pipeline.
    
    
    
    -------------------------- EXAMPLE 6 --------------------------
    
    PS C:\>Get-AWSPublicIpAddressRange -ServiceKey ec2,route53_healthchecks -Region us-west-2
    
    
    Description
    
    -----------
    
    Filters the IP address ranges to output only those belonging to EC2 and CloudFront and  in the US West (Oregon) 
    region to the pipeline. Multiple values can also be specified for the -Region parameter.
    
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Get-AWSPublicIpAddressRange.
    html&tocid=Get-AWSPublicIpAddressRange
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psGet-AWSRegion">
NAME
    Get-AWSRegion
    
SYNOPSIS
    Returns the set of available AWS regions.
    
SYNTAX
    Get-AWSRegion [[-SystemName] <System.String>] [-IncludeChina <System.Management.Automation.SwitchParameter>] 
    [-IncludeGovCloud <System.Management.Automation.SwitchParameter>] [-GovCloudOnly 
    <System.Management.Automation.SwitchParameter>] [<CommonParameters>]
    
    
DESCRIPTION
    Returns the set of available AWS regions.
    

PARAMETERS
    -GovCloudOnly <System.Management.Automation.SwitchParameter>
        If set the returned collection contains only the 'Gov Cloud' region(s). 
        Default: off.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -IncludeChina <System.Management.Automation.SwitchParameter>
        Include the China (Beijing) region in the returned collection of AWSRegion instances.  Note that use of this 
        region requires an alternate set of credentials. 
        This switch is ignored if the SystemName parameter is used to request a specific AWSRegion instance. To return 
        the specific China (Beijing) region, specify a value of 'cn-north-1' for the SystemName parameter. 
        Default: off.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -IncludeGovCloud <System.Management.Automation.SwitchParameter>
        If set the returned collection includes 'Gov Cloud' region(s). 
        Default: off.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -SystemName <System.String>
        If set returns an AWSRegion instance corresponding to the specified system name (e.g. us-west-2). 
        This parameter can also be used to return AWSRegion instances for the US GovCloud and China (Beijing) regions 
        by specifying the relevant system name.
        
        Required?                    false
        Position?                    1
        Default value                None
        Accept pipeline input?       True (ByValue, )
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    AWSRegion
        
     
        AWSRegion instance for each available region.
    
    
    
RELATED LINKS
    Online version: 
    http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Get-AWSRegion.html&tocid=Get-AWSRegion
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psGet-DefaultAWSRegion">
NAME
    Get-DefaultAWSRegion
    
SYNOPSIS
    Returns the current default AWS region for this shell, if any, as held in the shell variable $StoredAWSRegion.
    
SYNTAX
    Get-DefaultAWSRegion [<CommonParameters>]
    
    
DESCRIPTION
    Returns the current default AWS region for this shell, if any, as held in the shell variable $StoredAWSRegion.
    

PARAMETERS
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    AWSRegion
        
     
        AWSRegion instance mapping to the default AWS region stored in $StoredAWSRegion.
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Get-DefaultAWSRegion.html&to
    cid=Get-DefaultAWSRegion
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psInitialize-AWSDefaults">
NAME
    Initialize-AWSDefaults
    
SYNOPSIS
    Creates or updates the credential profile named 'default' using supplied keys, existing credentials or profile, or 
    EC2 metadata. The profile and a default region is then set active in the current shell.
    
SYNTAX
    Initialize-AWSDefaults [[-ProfileName] <System.String>] [[-ProfilesLocation] <System.String>] [[-Region] 
    <System.Object>] [-AccessKey <System.String>] [-SecretKey <System.String>] [-SessionToken <System.String>] 
    [-Credential <Amazon.Runtime.AWSCredentials>] [-NetworkCredential <System.Management.Automation.PSCredential>] 
    [<CommonParameters>]
    
    
DESCRIPTION
    Creates or updates the credential profile named 'default' and sets the profile, and optionally a region,  as 
    active in the current shell. The credential data to be stored in the 'default' profile can be provided  from: 
     -Supplied access and secret key parameters for AWS credentials 
     -A pre-existing profile (an AWS credentials or SAML role profile can be specified) 
     -A credentials object 
     -Active credentials in the current shell (in the variable $StoredAWSCredentials) 
     -EC2 role metadata (for instances launched with instance profiles) 
    A default region to assume when the default profile is active is also set using the -Region parameter,   from a 
    default region already set in the current shell or, if the cmdlet is executing on an EC2 instance, from the 
    instance metadata. If a region setting cannot be determined from a parameter or the shell you are  prompted to 
    select one. 
    Note that if run on an EC2 instance and you want to select a region other than the region containing the instance 
    you should supply the -Region parameter so that the cmdlet does not inspect EC2 instance metadata to auto-discover 
    the region. 
    In all cases a profile named 'default' will be created or updated to contain the specified credential and region 
    data. Note that if the credential source is another profile this cmdlet effectively copies the  credential data 
    from the source profile to the 'default' profile. 
    When the cmdlet exits the active credentials can be accessed in the shell via a variable named 
    $StoredAWSCredentials.  The active region can be found in the variable $StoredAWSRegion.
    

PARAMETERS
    -AccessKey <System.String>
        The AWS access key for the user account. This can be a temporary access key if the corresponding session token 
        is supplied to the -SessionToken parameter. Temporary session credentials can be set for the current shell 
        instance only and cannot be saved to the credential store file.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByPropertyName)
        Accept wildcard characters?  false
        
    -Credential <Amazon.Runtime.AWSCredentials>
        An AWSCredentials object instance containing access and secret key information, and optionally a token for 
        session-based credentials.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByValue, )
        Accept wildcard characters?  false
        
    -NetworkCredential <System.Management.Automation.PSCredential>
        Used with SAML-based authentication when ProfileName references a SAML role profile.  Contains the network 
        credentials to be supplied during authentication with the  configured identity provider's endpoint. This 
        parameter is not required if the user's default network identity can or should be used during authentication.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByValue, )
        Accept wildcard characters?  false
        
    -ProfileName <System.String>
        The user-defined name of an AWS credentials or SAML-based role profile containing credential information. The 
        profile is expected to be found in the secure credential file shared with the AWS SDK for .NET and AWS Toolkit 
        for Visual Studio. You can also specify the name of a profile stored in the .ini-format credential file used 
        with  the AWS CLI and other AWS SDKs.
        
        Required?                    false
        Position?                    201
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -ProfilesLocation <System.String>
        Used to specify the name and location of the ini-format credential file (shared with  the AWS CLI and other 
        AWS SDKs) when the file does not use the default name and/or  folder location. 
        When the ini-format credential file uses the default filename ('credentials') and is  placed in the default 
        search location ('.aws' folder in the current user's profile folder,  'C:\Users\userid') this parameter is not 
        required. This parameter is also not required  when the profile to be used is contained in the encrypted 
        credential file shared with the  AWS SDK for .NET and AWS Toolkit for Visual Studio. 
        As the current folder can vary in a shell or during script execution it is advised  that you use specify a 
        fully qualified path instead of a relative path.
        
        Required?                    false
        Position?                    202
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -Region <System.Object>
        The system name of an AWS region or an AWSRegion instance. This governs the sendpoint that will be used when 
        calling service operations. Note that  the AWS resources referenced in a call are usually region-specific.
        
        Required?                    false
        Position?                    211
        Default value                None
        Accept pipeline input?       True (ByValue, ByPropertyName)
        Accept wildcard characters?  false
        
    -SecretKey <System.String>
        The AWS secret key for the user account. This can be a temporary secret key if the corresponding session token 
        is supplied to the -SessionToken parameter. Temporary session credentials can be set for the current shell 
        instance only and cannot be saved to the credential store file.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByPropertyName)
        Accept wildcard characters?  false
        
    -SessionToken <System.String>
        The session token if the access and secret keys are temporary session-based credentials. Temporary session 
        credentials can be set for the current shell  instance only and cannot be saved to the credential store file.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByPropertyName)
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    None
        
     
        This cmdlet does not generate any output.
    
    
    -------------------------- EXAMPLE 1 --------------------------
    
    PS C:\>Initialize-AWSDefaults
    
    
    Description
    
    -----------
    
    Tests to see if a profile named 'default' exists. If it does the credential and region data in the profile are 
    loaded and set as active in the current shell.
    
    If a 'default' profile does not exist and the cmdlet is running on the local workstation the user is prompted to 
    enter the AWS access and secret keys for an account, and to select a default region. If run on an Amazon EC2 
    instance the instance metadata is inspected to determine if the instance was launched with a role and if so 
    credentials are obtained from the role before prompting for a default region. The credentials and region selection 
    are then saved into a profile named 'default' and set as active in the current shell.
    
    
    
    -------------------------- EXAMPLE 2 --------------------------
    
    PS C:\>Initialize-AWSDefaults -AccessKey AKIAIOSFODNN7EXAMPLE -SecretKey wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY 
    -Region us-west-2
    
    
    Description
    
    -----------
    
    Saves the specified credential keys and default region selection to a profile named 'default'. On exit the 
    credentials and region are set as active in the current shell.
    
    
    
    -------------------------- EXAMPLE 3 --------------------------
    
    PS C:\>Initialize-AWSDefaults -ProfileName myProfile -Region us-west-2
    
    
    Description
    
    -----------
    
    Loads the credential data from the profile named 'myProfile' and saves it to a profile named 'default' 
    (effectively copying credential data from one profile to another). The default profile is also updated to assume a 
    default region of 'us-west-2'. When the cmdlet exists the specified credentials and region are set active in the 
    current shell.
    
    
    
    -------------------------- EXAMPLE 4 --------------------------
    
    PS C:\>Initialize-AWSDefaults -Region us-west-2
    
    
    Description
    
    -----------
    
    If a profile named 'default' exists it is updated to assume a default region of 'us-west-2'. If the profile does 
    not exist and the cmdlet is running on the local workstation the user is prompted to enter the AWS access and 
    secret keys for an account. If run on an Amazon EC2 instance the instance metadata is inspected to determine if 
    the instance was launched with a role and if so credentials are obtained from the role. A profile named 'default' 
    is then created containing the discovered or entered credentials and region, and the current shell updated to set 
    thenm active.
    
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Initialize-AWSDefaults.html&
    tocid=Initialize-AWSDefaults
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psNew-AWSCredentials">
NAME
    New-AWSCredentials
    
SYNOPSIS
    Returns a populated AWSCredentials instance.
    
SYNTAX
    New-AWSCredentials [[-ProfileName] <System.String>] [[-ProfilesLocation] <System.String>] [-AccessKey 
    <System.String>] [-SecretKey <System.String>] [-SessionToken <System.String>] [-Credential 
    <Amazon.Runtime.AWSCredentials>] [-NetworkCredential <System.Management.Automation.PSCredential>] 
    [<CommonParameters>]
    
    
DESCRIPTION
    Creates and returns an AWSCredentials object
    

PARAMETERS
    -AccessKey <System.String>
        The AWS access key for the user account. This can be a temporary access key if the corresponding session token 
        is supplied to the -SessionToken parameter. Temporary session credentials can be set for the current shell 
        instance only and cannot be saved to the credential store file.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByPropertyName)
        Accept wildcard characters?  false
        
    -Credential <Amazon.Runtime.AWSCredentials>
        An AWSCredentials object instance containing access and secret key information, and optionally a token for 
        session-based credentials.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByValue, )
        Accept wildcard characters?  false
        
    -NetworkCredential <System.Management.Automation.PSCredential>
        Used with SAML-based authentication when ProfileName references a SAML role profile.  Contains the network 
        credentials to be supplied during authentication with the  configured identity provider's endpoint. This 
        parameter is not required if the user's default network identity can or should be used during authentication.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByValue, )
        Accept wildcard characters?  false
        
    -ProfileName <System.String>
        The user-defined name of an AWS credentials or SAML-based role profile containing credential information. The 
        profile is expected to be found in the secure credential file shared with the AWS SDK for .NET and AWS Toolkit 
        for Visual Studio. You can also specify the name of a profile stored in the .ini-format credential file used 
        with  the AWS CLI and other AWS SDKs.
        
        Required?                    false
        Position?                    201
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -ProfilesLocation <System.String>
        Used to specify the name and location of the ini-format credential file (shared with  the AWS CLI and other 
        AWS SDKs) when the file does not use the default name and/or  folder location. 
        When the ini-format credential file uses the default filename ('credentials') and is  placed in the default 
        search location ('.aws' folder in the current user's profile folder,  'C:\Users\userid') this parameter is not 
        required. This parameter is also not required  when the profile to be used is contained in the encrypted 
        credential file shared with the  AWS SDK for .NET and AWS Toolkit for Visual Studio. 
        As the current folder can vary in a shell or during script execution it is advised  that you use specify a 
        fully qualified path instead of a relative path.
        
        Required?                    false
        Position?                    202
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -SecretKey <System.String>
        The AWS secret key for the user account. This can be a temporary secret key if the corresponding session token 
        is supplied to the -SessionToken parameter. Temporary session credentials can be set for the current shell 
        instance only and cannot be saved to the credential store file.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByPropertyName)
        Accept wildcard characters?  false
        
    -SessionToken <System.String>
        The session token if the access and secret keys are temporary session-based credentials. Temporary session 
        credentials can be set for the current shell  instance only and cannot be saved to the credential store file.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByPropertyName)
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    AWSCredentials
        
     
        AWSCredentials instance containing AWS credentials data.
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=New-AWSCredentials.html&toci
    d=New-AWSCredentials
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psRemove-AWSLoggingListener">
NAME
    Remove-AWSLoggingListener
    
SYNOPSIS
    Removes a logger from the specified source (e.g. 'Amazon', or 'Amazon.S3') by name.
    
SYNTAX
    Remove-AWSLoggingListener [-Source] <System.String> [-Name] <System.String> [<CommonParameters>]
    
    
DESCRIPTION
    Remove a listener from and AWS API trace source.
    

PARAMETERS
    -Name <System.String>
        Name of the trace listener to remove.
        
        Required?                    true
        Position?                    2
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -Source <System.String>
        Source to remove the listener from. 
        Examples: 'Amazon', or 'Amazon.DynamoDB'.
        
        Required?                    true
        Position?                    1
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    None
        
     
        This cmdlet does not produce any output.
    
    
    -------------------------- EXAMPLE 1 --------------------------
    
    PS C:\>Remove-AWSLoggingListener -Source Amazon.S3 -Name MyS3Logs
    
    
    Description
    
    -----------
    
    Removes the specified logger from the trace source.
    
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Remove-AWSLoggingListener.ht
    ml&tocid=Remove-AWSLoggingListener
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psSet-AWSCredentials">
NAME
    Set-AWSCredentials
    
SYNOPSIS
    Saves AWS credentials to persistent store (-StoreAs) or temporarily for the shell using shell variable 
    $StoredAWSCredentials.Note that temporary session-based credentials cannot be saved to the persistent store.
    
SYNTAX
    Set-AWSCredentials [[-ProfileName] <System.String>] [[-ProfilesLocation] <System.String>] [-StoreAs 
    <System.String>] [-AccessKey <System.String>] [-SecretKey <System.String>] [-SessionToken <System.String>] 
    [-Credential <Amazon.Runtime.AWSCredentials>] [-NetworkCredential <System.Management.Automation.PSCredential>] 
    [<CommonParameters>]
    
    
DESCRIPTION
    Saves AWS credentials to persistent store (-StoreAs) or temporarily for the shell using shell variable 
    $StoredAWSCredentials.
    

PARAMETERS
    -AccessKey <System.String>
        The AWS access key for the user account. This can be a temporary access key if the corresponding session token 
        is supplied to the -SessionToken parameter. Temporary session credentials can be set for the current shell 
        instance only and cannot be saved to the credential store file.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByPropertyName)
        Accept wildcard characters?  false
        
    -Credential <Amazon.Runtime.AWSCredentials>
        An AWSCredentials object instance containing access and secret key information, and optionally a token for 
        session-based credentials.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByValue, )
        Accept wildcard characters?  false
        
    -NetworkCredential <System.Management.Automation.PSCredential>
        Used with SAML-based authentication when ProfileName references a SAML role profile.  Contains the network 
        credentials to be supplied during authentication with the  configured identity provider's endpoint. This 
        parameter is not required if the user's default network identity can or should be used during authentication.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByValue, )
        Accept wildcard characters?  false
        
    -ProfileName <System.String>
        The user-defined name of an AWS credentials or SAML-based role profile containing credential information. The 
        profile is expected to be found in the secure credential file shared with the AWS SDK for .NET and AWS Toolkit 
        for Visual Studio. You can also specify the name of a profile stored in the .ini-format credential file used 
        with  the AWS CLI and other AWS SDKs.
        
        Required?                    false
        Position?                    201
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -ProfilesLocation <System.String>
        Used to specify the name and location of the ini-format credential file (shared with  the AWS CLI and other 
        AWS SDKs) when the file does not use the default name and/or  folder location. 
        When the ini-format credential file uses the default filename ('credentials') and is  placed in the default 
        search location ('.aws' folder in the current user's profile folder,  'C:\Users\userid') this parameter is not 
        required. This parameter is also not required  when the profile to be used is contained in the encrypted 
        credential file shared with the  AWS SDK for .NET and AWS Toolkit for Visual Studio. 
        As the current folder can vary in a shell or during script execution it is advised  that you use specify a 
        fully qualified path instead of a relative path.
        
        Required?                    false
        Position?                    202
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -SecretKey <System.String>
        The AWS secret key for the user account. This can be a temporary secret key if the corresponding session token 
        is supplied to the -SessionToken parameter. Temporary session credentials can be set for the current shell 
        instance only and cannot be saved to the credential store file.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByPropertyName)
        Accept wildcard characters?  false
        
    -SessionToken <System.String>
        The session token if the access and secret keys are temporary session-based credentials. Temporary session 
        credentials can be set for the current shell  instance only and cannot be saved to the credential store file.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByPropertyName)
        Accept wildcard characters?  false
        
    -StoreAs <System.String>
        The name to be used to identity the credentials in local storage. Use this with the -ProfileName parameter on 
        cmdlets to load the stored credentials. 
        Temporary session credentials, identified by use of the -SessionToken parameter, cannot be stored. Specifying 
        this parameter in addition to -SessionToken will result in an error message.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    None
        
     
        This cmdlet does not generate any output.
    
    
    -------------------------- EXAMPLE 1 --------------------------
    
    PS C:\>Set-AWSCredentials -ProfileName myCredentials
    
    
    Description
    
    -----------
    
    Loads the credentials contained in the specified profile and sets them active for all cmdlets in the current shell 
    (t)he parameter name can be omitted for brevity). The cmdlet first searches the credential file shared with the 
    AWS SDK for .NET and AWS Toolkit for Visual Studio. If this file does not contain a matching profile the cmdlet 
    will attempt to load the profile from the text-format credential file shared with the AWS CLI. If this file has 
    been renamed, or does not exist in the default location (), use the -ProfilesLocation parameter to point to the 
    credential file. Note that -ProfilesLocation is only used to reference credential files shared with the AWS CLI 
    that do not have the default name or location/
    
    
    
    -------------------------- EXAMPLE 2 --------------------------
    
    PS C:\>Set-AWSCredentials -AccessKey AKIAIOSFODNN7EXAMPLE -SecretKey wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY 
    -StoreAs myCredentials
    
    
    Description
    
    -----------
    
    Saves the specified credentials as a profile named 'myCredentials'. The cmdlet does not affect any credentials 
    currently set as active in the shell. To update the shell run the cmdlet again specifying the name of the profile 
    (Set-AWSCredentials -ProfileName myCredentials).
    
    
    
    -------------------------- EXAMPLE 3 --------------------------
    
    PS C:\>Set-AWSCredentials -AccessKey AKIAIOSFODNN7EXAMPLE -SecretKey wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY 
    -SessionToken SamPleTokeN.....
    
    
    Description
    
    -----------
    
    Sets the temporary session-based credentials as active in the current shell. Note that temporary credentials 
    cannot be saved as a profile.
    
    
    
    -------------------------- EXAMPLE 4 --------------------------
    
    PS C:\>Set-AWSCredentials -ProfileName myCredentials -ProfilesLocation C:\myAWSCredentials.ini
    
    
    Description
    
    -----------
    
    Loads the specified credentials from the ini-format credential file ()with a non-default name and location) shared 
    with the AWS CLI and sets the active in the current shell. The -ProfilesLocation parameter can be omitted if the 
    credential file is named 'credentials' and is stored in the default location (%USERPROFILE\.aws).
    
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Set-AWSCredentials.html&toci
    d=Set-AWSCredentials
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psSet-AWSHistoryConfiguration">
NAME
    Set-AWSHistoryConfiguration
    
SYNOPSIS
    Configures how the $AWSHistory session variable records AWS cmdlet processing.
    
SYNTAX
    Set-AWSHistoryConfiguration [-MaxCmdletHistory <System.Int32>] [-MaxServiceCallHistory <System.Int32>] 
    [-RecordServiceRequests <System.Management.Automation.SwitchParameter>] [<CommonParameters>]
    
    
DESCRIPTION
    Configures the $AWSHistory instance for the current session.  
    A history buffer size of 0 disables overall AWS cmdlet activity recording and clears any data currently  in the 
    buffer. If the new size is smaller than the current data in the buffer, older records are deleted. 
    By default, only service responses are recorded for a cmdlet. Use the -EnableRequestRecording switch to turn on 
    tracing of service requests in the buffer.
    

PARAMETERS
    -MaxCmdletHistory <System.Int32>
        The maximum number of AWS cmdlet invocations that will be held in the history buffer.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -MaxServiceCallHistory <System.Int32>
        The maximum number of service responses (and requests, if enabled) that will be recorded for a single AWS 
        cmdlet.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -RecordServiceRequests <System.Management.Automation.SwitchParameter>
        If set, also records the service requests that a cmdlet makes. Default: Off.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    None
        
     
        This cmdlet does not generate any output.
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Set-AWSHistoryConfiguration.
    html&tocid=Set-AWSHistoryConfiguration
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psSet-AWSHistoryConfiguration">
NAME
    Set-AWSHistoryConfiguration
    
SYNOPSIS
    Configures how the $AWSHistory session variable records AWS cmdlet processing.
    
SYNTAX
    Set-AWSHistoryConfiguration [-MaxCmdletHistory <System.Int32>] [-MaxServiceCallHistory <System.Int32>] 
    [-RecordServiceRequests <System.Management.Automation.SwitchParameter>] [<CommonParameters>]
    
    
DESCRIPTION
    Configures the $AWSHistory instance for the current session.  
    A history buffer size of 0 disables overall AWS cmdlet activity recording and clears any data currently  in the 
    buffer. If the new size is smaller than the current data in the buffer, older records are deleted. 
    By default, only service responses are recorded for a cmdlet. Use the -EnableRequestRecording switch to turn on 
    tracing of service requests in the buffer.
    

PARAMETERS
    -MaxCmdletHistory <System.Int32>
        The maximum number of AWS cmdlet invocations that will be held in the history buffer.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -MaxServiceCallHistory <System.Int32>
        The maximum number of service responses (and requests, if enabled) that will be recorded for a single AWS 
        cmdlet.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -RecordServiceRequests <System.Management.Automation.SwitchParameter>
        If set, also records the service requests that a cmdlet makes. Default: Off.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    None
        
     
        This cmdlet does not generate any output.
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Set-AWSHistoryConfiguration.
    html&tocid=Set-AWSHistoryConfiguration
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psSet-AWSProxy">
NAME
    Set-AWSProxy
    
SYNOPSIS
    Sets AWS default proxy for the shell. Subsequent AWS cmdlet invocations will use the configured proxy.
    
SYNTAX
    Set-AWSProxy [-Hostname] <System.String> [-Port] <System.Int32> [[-Username] <System.String>] [[-Password] 
    <System.String>] [[-Credential] <System.Net.ICredentials>] [<CommonParameters>]
    
    
DESCRIPTION
    Sets AWS default proxy for the shell.
    

PARAMETERS
    -Credential <System.Net.ICredentials>
        The credentials to submit to the proxy server for authentication
        
        Required?                    false
        Position?                    5
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -Hostname <System.String>
        Proxy server host
        
        Required?                    true
        Position?                    1
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -Password <System.String>
        Password to submit to the proxy server for authentication
        
        Required?                    false
        Position?                    4
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -Port <System.Int32>
        Proxy server port
        
        Required?                    true
        Position?                    2
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -Username <System.String>
        Username to submit to the proxy server for authentication
        
        Required?                    false
        Position?                    3
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    None
        
     
        This cmdlet does not generate any output.
    
    
    -------------------------- EXAMPLE 1 --------------------------
    
    PS C:\>Set-AWSProxy -Hostname localhost -Port 8888
    
    
    Description
    
    -----------
    
    This command configures a proxy that does not require special credentials.
    
    
    
    -------------------------- EXAMPLE 2 --------------------------
    
    PS C:\>Set-AWSProxy -Hostname localhost -Port 8888 -Username 1 -Password 1
    
    
    Description
    
    -----------
    
    This command configures a proxy that requires a username and a password.
    
    
    
    -------------------------- EXAMPLE 3 --------------------------
    
    PS C:\>Set-AWSProxy -Hostname localhost -Port 8888 -Credential ([System.Net.CredentialCache]::DefaultCredentials)
    
    
    Description
    
    -----------
    
    This command configures a proxy with default credentials. The -Credentials parameter can be used for any 
    credentials object that implements the ICredentials interface.
    
    
    
    
RELATED LINKS
    Online version: 
    http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Set-AWSProxy.html&tocid=Set-AWSProxy
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psSet-AWSResponseLogging">
NAME
    Set-AWSResponseLogging
    
SYNOPSIS
    Modify response logging options for AWS service requests.
    
SYNTAX
    Set-AWSResponseLogging [[-Level] <System.String>] [<CommonParameters>]
    
    
DESCRIPTION
    Modify when to produce log entries.
    

PARAMETERS
    -Level <System.String>
        When to log responses.
        
        Required?                    false
        Position?                    1
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    None
        
     
        This cmdlet does not produce any output.
    
    
    -------------------------- EXAMPLE 1 --------------------------
    
    PS C:\>Set-AWSResponseLogging -Level Always
    
    
    Description
    
    -----------
    
    Enables logging of all service responses configured in the attached listeners. Other values for the -Level 
    parameter are 'Never', which turns off logging and 'OnError' which logs only error responses.
    
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Set-AWSResponseLogging.html&
    tocid=Set-AWSResponseLogging
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psSet-AWSSamlEndpoint">
NAME
    Set-AWSSamlEndpoint
    
SYNOPSIS
    Creates or updates an endpoint settings definition for use with SAML role profiles.
    
SYNTAX
    Set-AWSSamlEndpoint -Endpoint <System.Uri> -StoreAs <System.String> [-AuthenticationType <System.String>] 
    [<CommonParameters>]
    
    
DESCRIPTION
    Creates or updates an endpoint settings definition for use with SAML role profiles. The name of the endpoint 
    settings is used with the Set-AWSSamlRoleProfile cmdlet to associate one or more role profiles to a shared 
    endpoint definition.
    

PARAMETERS
    -AuthenticationType <System.String>
        The authentication type (or protocol type) used when communicating with the endpoint. If not configured for an 
        endpoint 'Kerberos' is assumed.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -Endpoint <System.Uri>
        The endpoint to be used when authenticating users prior to requesting temporary role- based AWS credentials. 
        The full endpoint of the identity provider must be specified and it must be a HTTPS-scheme URL.
        
        Required?                    true
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByValue, )
        Accept wildcard characters?  false
        
    -StoreAs <System.String>
        The user-defined name to assign to the endpoint settings. This name will be used when creating or accessing 
        role profiles with the Set-AWSSamlRoleProfile cmdlet to set up and use role-based credential profiles that use 
        the endpoint to authenticate the user.
        
        Required?                    true
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    System.String
        
     
        The cmdlet returns the name assigned to the endpoint settings to the pipeline.
    
    
    -------------------------- EXAMPLE 1 --------------------------
    
    PS C:\> $endpoint = "https://adfs.example.com/adfs/ls/IdpInitiatedSignOn.aspx?loginToRp=urn:amazon:webservices"    
    PS C:\> Set-AWSSamlEndpoint -StoreAs MyADFSEndpoint -Endpoint $endpoint
    
    
    Description
    
    -----------
    
    Creates or updates a profile name MyADFSEndpoint for use with Set-AWSSamlRoleProfile. Kerberos will be used as the 
    authentication protocol when authenticating users against the endoint.
    
    
    
    -------------------------- EXAMPLE 2 --------------------------
    
    PS C:\> $endpoint = "https://adfs.example.com/adfs/ls/IdpInitiatedSignOn.aspx?loginToRp=urn:amazon:webservices"    
    PS C:\> Set-AWSSamlEndpoint -StoreAs MyADFSEndpoint -Endpoint $endpoint -AuthenticationType NTLM
    
    
    Description
    
    -----------
    
    Creates or updates a profile name MyADFSEndpoint for use with Set-AWSSamlRoleProfile. The endpoint is configured 
    to use the NTLM protocol during authentication (other options are Digest, Basic, Kerberos and Negotiate).
    
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Set-AWSSamlEndpoint.html&toc
    id=Set-AWSSamlEndpoint
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psSet-AWSSamlRoleProfile">
NAME
    Set-AWSSamlRoleProfile
    
SYNOPSIS
    Creates or updates one or more role profiles for use with authentication against a SAML-based federated identity 
    provider to obtain temporary role-based AWS credentials.
    
SYNTAX
    Set-AWSSamlRoleProfile -EndpointName <System.String> [-PrincipalARN <System.String>] [-RoleARN <System.String>] 
    [-NetworkCredential <System.Management.Automation.PSCredential>] -StoreAs <System.String> -StoreAllRoles 
    <System.Management.Automation.SwitchParameter> [<CommonParameters>]
    
    
DESCRIPTION
    Creates or updates role profiles for use with a SAML federated identity provider to obtain temporary AWS 
    credentials for roles the user is authorized to assume. The endpoint for authentication should have been 
    configured previously using Set-AWSSamlEndpoint. Once created the role profiles can be used to obtain time-limited 
    temporary AWS credentials by specifying the name of the role profile to the -ProfileName parameter of the 
    Set-AWSCredentials cmdlet or any cmdlet that makes calls to AWS service operations. 
     
    User authentication is not performed until AWS credentials are required, i.e. just prior to a service operation 
    call. Additionally if the credentials expire then the tools will automatically attempt to re-authenticate the user 
    to obtain fresh credentials. When a role profile is configured to use the default logged-in user identity then 
    this process happens silently. If a role profile is configured to use an alternate identity (by specifying the 
    -NetworkCredential parameter) the user is prompted to re-enter their credentials prior to re-authentication.
    

PARAMETERS
    -EndpointName <System.String>
        The name assigned to the endpoint definition that was previously registered using Set-AWSSamlEndpoint. The 
        endpoint definition contains the URL of the endpoint to be used to authenticate users prior to vending 
        temporary AWS credentials.
        
        Required?                    true
        Position?                    Named
        Default value                None
        Accept pipeline input?       True (ByValue, )
        Accept wildcard characters?  false
        
    -NetworkCredential <System.Management.Automation.PSCredential>
        Optional. Supply a value only if an identity different to the user's default Windows identity should be used 
        during authentication. 
         
        If an alternate credential is specified then when the tools need to re-authenticate the user to obtain fresh 
        credentials following expiry the user is prompted to re-enter the password for the user account before 
        re-authentication can be performed. When the default user identity is configured for use (-NetworkCredential 
        not specified) re-authentication occurs silently.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -PrincipalARN <System.String>
        The Amazon Resource Name (ARN) of the principal holding the role to be assumed when credentials are requested 
        following successful authentication. If specified the RoleARN parameter must also be specified. 
         
        If neither of the PrincipalARN and RoleARN parameters are supplied and the user is authorized to assume 
        multiple roles the cmdlet will prompt to select the role that should be referenced by the profile. The user is 
        also prompted if ARNs are specified but cannot be found in the data returned on successful authentication.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -RoleARN <System.String>
        The Amazon Resource Name (ARN) of the role to be assumed when credentials are requested following successful 
        authentication. If specified the PrincipalARN parameter must also be specified. 
         
        If neither of the PrincipalARN and RoleARN parameters are supplied and the user is authorized to assume 
        multiple roles the cmdlet will prompt to select the role that should be referenced by the profile. The user is 
        also prompted if ARNs are specified but cannot be found in the data returned on successful authentication.
        
        Required?                    false
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -StoreAllRoles <System.Management.Automation.SwitchParameter>
        If set all roles available to the user are evaluated following authentication and one role profile per role 
        will be created. The name of each role will be used for each corresponding profile that is created.
        
        Required?                    true
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    -StoreAs <System.String>
        The name to associate with the role data. This name will be used with the -ProfileName parameter to 
        Set-AWSCredentials cmdlet and AWS service cmdlets to load the profile and obtain temporary AWS credentials 
        based on the role and other data held in the profile.
        
        Required?                    true
        Position?                    Named
        Default value                None
        Accept pipeline input?       False
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    System.String
        
     
        This cmdlet returns the name of the role profile to the pipeline. If the -StoreAllRoles switch is used the 
        names of all created or updated profiles are output.
    
    
    -------------------------- EXAMPLE 1 --------------------------
    
    PS C:\>Set-AWSSamlRoleProfile -StoreAs Role1 -EndpointName MyADFSEndpoint
    
    
    Description
    
    -----------
    
    Authenticates the currently logged in user account against the specified endpoint (configured previusly using 
    Set-AWSSamlEndpoint). Following successful authentication, if the user is authorized to assume only a single role 
    the role details are stored in a profile named 'Role1'. If the user is authorized for more than one role a menu is 
    presented for the desired  role to be associated with the profile to be selected.
    
    The role profile can be used to obtain time-limited temporary AWS credentials by specifying it as the value of the 
    -ProfileName parameter to the Set-AWSCredentials cmdlet or any cmdlet that makes calls to AWS service operations. 
    Authentication prior to obtaining credentials is performed using the current user identity.
    
    
    
    -------------------------- EXAMPLE 2 --------------------------
    
    PS C:\> $credential = Get-Credential -Message "Enter user credentials for authentication" 
    PS C:\> Set-AWSSamlRoleProfile -StoreAs Role1 -EndpointName MyADFSEndpoint -NetworkCredential $credential
    
    
    Description
    
    -----------
    
    Authenticates the specified user account against the specified endpoint (configured previously using 
    Set-AWSSamlEndpoint). Following successful  authentication, if the user is authorized to assume only a single role 
    the role details are stored in a profile named 'Role1'. If the user is authorized for more than one role a menu is 
    presented for the desired  role to be associated with the profile to be selected.
    
    The role profile can be used to obtain time-limited temporary AWS credentials by specifying it as the value of the 
    -ProfileName parameter to the Set-AWSCredentials cmdlet or any cmdlet that makes calls to AWS service operations. 
    Authentication prior to obtaining credentials is performed using the current user identity.
    
    
    
    -------------------------- EXAMPLE 3 --------------------------
    
    PS C:\> $params = @{
        "PrincipalARN"="arn:aws:iam::012345678912:saml-provider/ADFS"
        "RoleARN"="arn:aws:iam::012345678912:role/ADFS-Dev"
    }
    PS C:\> Set-AWSSamlRoleProfile @params -StoreAs ADFS-Dev
    
    
    Description
    
    -----------
    
    This example shows how to create or update a role profile when the Amazon Resource Names (ARNs) for the role are 
    known in advance. Following authentication for the currently logged in user the cmdlet will verify that the role 
    is present in the set the user is authorized to assume and set up the role profile. If the role is not found the 
    user is prompted to select the correct role.
    
    To authenticate as a different user account add the -NetworkCredential parameter as shown in other examples.
    
    
    
    -------------------------- EXAMPLE 4 --------------------------
    
    PS C:\>Set-AWSSamlRoleProfile -StoreAllRoles -EndpointName MyADFSEndpoint
    
    
    Description
    
    -----------
    
    Authenticates the current user account against the configured endpoint and if successful creates one role profile 
    for each role the user is authorized to assume. The 'friendly name' of the role is used as the name for each 
    profile.
    
    To authenticate as a different user account add the -NetworkCredential parameter as shown in other examples.
    
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Set-AWSSamlRoleProfile.html&
    tocid=Set-AWSSamlRoleProfile
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html

<a name="psSet-DefaultAWSRegion">
NAME
    Set-DefaultAWSRegion
    
SYNOPSIS
    Sets a default AWS region system name (e.g. us-west-2, eu-west-1 etc) into the shell variable $StoredAWSRegion.
    
SYNTAX
    Set-DefaultAWSRegion [[-Region] <System.Object>] [<CommonParameters>]
    
    
DESCRIPTION
    Sets a default AWS region into the shell environment, accessible as $StoredAWSRegion.
    

PARAMETERS
    -Region <System.Object>
        The system name of an AWS region or an AWSRegion instance. This governs the sendpoint that will be used when 
        calling service operations. Note that  the AWS resources referenced in a call are usually region-specific.
        
        Required?                    false
        Position?                    211
        Default value                None
        Accept pipeline input?       True (ByValue, ByPropertyName)
        Accept wildcard characters?  false
        
    <CommonParameters>
        This cmdlet supports the common parameters: Verbose, Debug,
        ErrorAction, ErrorVariable, WarningAction, WarningVariable,
        OutBuffer, PipelineVariable, and OutVariable. For more information, see 
        about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216). 
    
INPUTS
    
OUTPUTS
    None
        
     
        This cmdlet does not generate any output.
    
    
    -------------------------- EXAMPLE 1 --------------------------
    
    PS C:\>Set-DefaultAWSRegion -Region us-west-2
    
    
    Description
    
    -----------
    
    Sets the default region for all cmdlets in the current shell to 'us-west-2' (the parameter name can be omitted for 
    brevity). Once a shell default has been set you can override the default by using the -Region parameter with the 
    specific cmdlet(s) as required.
    
    
    
    
RELATED LINKS
    Online version: http://docs.aws.amazon.com/powershell/latest/reference/index.html?page=Set-DefaultAWSRegion.html&to
    cid=Set-DefaultAWSRegion
    Common credential and region parameters: 
    http://docs.aws.amazon.com/powershell/latest/reference/items/pstoolsref-commonparams.html
