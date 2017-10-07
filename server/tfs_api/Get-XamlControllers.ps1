
Param 
(
    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$TfsUri
)

try 
{
    [System.Reflection.Assembly]::LoadWithPartialName("Microsoft.TeamFoundation.Client") | Out-Null
    [System.Reflection.Assembly]::LoadWithPartialName("Microsoft.TeamFoundation.Build.Client") | Out-Null
    
    $tfs = [Microsoft.TeamFoundation.Client.TfsTeamProjectCollectionFactory]::GetTeamProjectCollection($TfsUri)
    $buildServer = $tfs.GetService([Microsoft.TeamFoundation.Build.Client.IBuildServer])
    $controllers = $buildServer.QueryBuildControllers($false)
    
    $controllers | % { Add-Member -MemberType NoteProperty -Name "Id" -InputObject $_ -Value ($_.Uri.ToString().Split('/')[-1]) } 
    $returnData = $controllers | Select-Object -Property id,Name,Status,Enabled,Uri | Sort-Object -Property name
    ConvertTo-Json -InputObject $returnData
}
catch
{
    Write-Output "Error while querying XAML controllers: $_"   
}