
Param 
(
    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$TfsUri, 

    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$ControllerUri
)

try
{
    [System.Reflection.Assembly]::LoadWithPartialName("Microsoft.TeamFoundation.Client") | Out-Null
    [System.Reflection.Assembly]::LoadWithPartialName("Microsoft.TeamFoundation.Build.Client") | Out-Null

    $tfs = [Microsoft.TeamFoundation.Client.TfsTeamProjectCollectionFactory]::GetTeamProjectCollection($TfsUri)
    $buildServer = $tfs.GetService([Microsoft.TeamFoundation.Build.Client.IBuildServer])
    $controllers = $buildServer.QueryBuildControllers($ControllerUri)
    $agents = $controllers[0].Agents

    $agents | % { Add-Member -MemberType NoteProperty -Name "Id" -InputObject $_ -Value ($_.Uri.ToString().Split('/')[-1]) } 
    $returnData = $agents | Select-Object -Property id,Name,Status,Enabled,MachineName,ReservedForBuild,Uri | Sort-Object -Property name

    ConvertTo-Json -InputObject $returnData
}
catch
{
    Write-Output "Error while querying XAML agents: $_"   
}